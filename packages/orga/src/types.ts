import { Literal as UnistLiteral, Node, Parent as UnistParent } from 'unist'

export { Node } from 'unist';

// ---- Basic Types ----
export interface Parent extends UnistParent {
  parent?: Parent;
}

export type Primitive = string | number | boolean

export interface Attributes {
  [key: string]: Primitive | { [key: string]: Primitive },
}

export interface Attributed {
  attributes: Attributes
}

export interface Timestamp {
  date: Date;
  end?: Date;
}

// ---- Syntax Tree Nodes ----
export interface Document extends Parent {
  type: 'document';
  properties: { [key: string]: string; };
  children: [Section, ...Headline[]] | Headline[];
}

export interface Section extends Parent {
  type: 'section';
  properties: { [key: string]: string; };
  children: Content[];
  // v2021.07.03 - "Only a headline can contain a section. As an
  // exception, text before the first headline in the document also
  // belongs to a section."
  parent?: Document | Headline | undefined;
}

type Content =
  | Footnote
  | Paragraph
  | Block
  | VerseBlock
  | Drawer
  | GreaterBlock
  | SpecialBlock
  | Planning
  | List
  | Table
  | HorizontalRule
  | HTML

export interface Footnote extends Parent {
  type: 'footnote';
  label: string;
  // v2021.07.03 - "CONTENTS can contain any element excepted another
  // footnote definition. It ends at the next footnote definition, the
  // next headline, two consecutive empty lines or the end of buffer."
  children: Exclude<Content, Footnote>[];
}

export interface Block extends Literal, Attributed {
  type: 'block';
  name: 'COMMENT' | 'EXAMPLE' | 'EXPORT' | 'SRC';
  params: string[];
}

export interface VerseBlock extends Parent, Attributed {
  type: 'verse_block';
  params: string[];
  children: PhrasingContent[];
}

export interface GreaterBlock extends Parent, Attributed {
  type: 'greater_block';
  name: 'CENTER' | 'QUOTE';
  params: string[];
}

export interface SpecialBlock extends Parent, Attributed {
  type: 'special_block';
  name: string;
  params: string[];
}

export interface Drawer extends Literal {
  type: 'drawer';
  name: string;
}

export interface Planning extends Node {
  type: 'planning';
  keyword: string;
  timestamp: Timestamp;
}

export interface List extends Parent, Attributed {
  type: 'list';
  indent: number;
  ordered: boolean;
  // "A plain list is a set of consecutive items of the same indentation. It can only directly contain items."
  children: ListItem[];
}

type TableContent = TableRow | TableRule

export interface Table extends Parent, Attributed {
  type: 'table';
  children: TableContent[];
}

export interface TableRow extends Parent {
  type: 'table.row';
  children: TableCell[];
}

export interface TableCell extends Parent {
  type: 'table.cell';
  children: PhrasingContent[];
}

export interface ListItem extends Parent {
  type: 'list.item';
  indent: number;
  tag?: string;
}

export interface Headline extends Parent {
  type: 'headline';
  level: number;
  keyword?: string;
  actionable: boolean;
  priority?: string;
  content: string;
  tags?: string[];
  // v2021.07.03 - "A headline contains directly one section
  // (optionally), followed by any number of deeper level headlines."
  children: [Section, ...Headline[]] | Headline[];
}


export interface Paragraph extends Parent, Attributed {
  type: 'paragraph';
  children: PhrasingContent[];
}

export interface Literal extends UnistLiteral {
  value: string;
}

export interface HTML extends Literal {
  type: 'html';
}

// ---- Tokens ----
export type Token =
  | Keyword
  | Todo
  | Newline
  | HorizontalRule
  | Stars
  | Priority
  | Tags
  | PlanningKeyword
  | PlanningTimestamp
  | ListItemTag
  | ListItemCheckbox
  | ListItemBullet
  | TableRule
  | TableColumnSeparator
  | PhrasingContent
  | FootnoteLabel
  | FootnoteInlineBegin
  | FootnoteReferenceEnd
  | BlockBegin
  | BlockEnd
  | DrawerBegin
  | DrawerEnd
  | Comment

export type PhrasingContent =
  | StyledText | Link | FootnoteReference | Newline

export interface HorizontalRule extends Node {
  type: 'hr'
}

export interface Newline extends Node {
  type: 'newline'
}

export interface StyledText extends Literal {
  type:
  | 'text.plain'
  | 'text.bold'
  | 'text.verbatim'
  | 'text.italic'
  | 'text.strikeThrough'
  | 'text.underline'
  | 'text.code'
}

export interface Link extends Literal {
  type: 'link';
  protocol: string;
  description: string;
  search?: string | number;
  parent?: Paragraph;
}

/**
 * A footnote reference, which is either:
 *
 * `[fn:LABEL]` - a plain footnote reference.
 *
 * `[fn:LABEL:DEFINITION]` - an inline footnote definition.
 *
 * `[fn::DEFINITION]` - an anonymous (inline) footnote definition.
 *
 * See https://orgmode.org/worg/dev/org-syntax.html#Footnote_References.
 *
 * If `label` is the empty string, then this is treated as an
 * anonymous footnote.
 *
 * If `children` is empty, then this is considered to not define a new
 * footnote (and in which case, `label` should not be the empty
 * string), if `children` is non-empty, then this is an inline
 * footnote definition.
 */
export interface FootnoteReference extends Parent {
  type: 'footnote.reference';
  label: string;
  children: PhrasingContent[];
}

export interface FootnoteInlineBegin extends Node {
  type: 'footnote.inline.begin';
  label: string;
}

export interface FootnoteReferenceEnd extends Node {
  type: 'footnote.reference.end';
}

// headline tokens
export interface Stars extends Node {
  type: 'stars';
  level: number;
}

export interface Todo extends Node {
  type: 'todo';
  keyword: string;
  actionable: boolean;
}

export interface Priority extends Literal {
  type: 'priority';
}

export interface Tags extends Node {
  type: 'tags';
  tags: string[];
}

// block tokens
export interface BlockBegin extends Node {
  type: 'block.begin';
  name: string;
  params: string[];
}

export interface BlockEnd extends Node {
  type: 'block.end';
  name: string;
}

// drawer tokens
export interface DrawerBegin extends Node {
  type: 'drawer.begin';
  name: string;
}

export interface DrawerEnd extends Node {
  type: 'drawer.end';
}

export interface Comment extends Literal {
  type: 'comment';
}

export interface Keyword extends Literal {
  type: 'keyword';
  key: string;
}

export interface FootnoteLabel extends Node {
  type: 'footnote.label';
  label: string;
}

export interface PlanningKeyword extends Literal {
  type: 'planning.keyword';
}

export interface PlanningTimestamp extends Node {
  type: 'planning.timestamp';
  value: Timestamp;
}

export interface ListItemTag extends Literal {
  type: 'list.item.tag';
}

export interface ListItemCheckbox extends Node {
  type: 'list.item.checkbox';
  checked: boolean;
}

export interface ListItemBullet extends Node {
  type: 'list.item.bullet';
  ordered: boolean;
  indent: number;
}

export interface TableRule extends Node {
  type: 'table.hr';
}

export interface TableColumnSeparator extends Node {
  type: 'table.columnSeparator';
}
