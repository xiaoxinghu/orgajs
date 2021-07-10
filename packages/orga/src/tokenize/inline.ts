import { Point } from 'unist'
import { isEqual } from '../position'
import { Reader } from '../reader'
import { FootnoteReference, Link, StyledText, Token, Newline } from './types'
import uri from '../uri'
import { escape } from '../utils'
import * as tk from './util';

const POST = `[\\s-\\.,:!?'\\)}]|$`
const BORDER = `[^,'"\\s]`

const MARKERS: { [key: string]: StyledText['type'] } = {
  '*': 'text.bold',
  '=': 'text.verbatim',
  '/': 'text.italic',
  '+': 'text.strikeThrough',
  '_': 'text.underline',
  '~': 'text.code',
}

interface Props {
  reader: Reader
  start?: Point
  end?: Point
}

export const tokenize = (props: Props, { ignoring }: { ignoring: string[] } = { ignoring: [] }): Token[] => {
  const { reader } = props;
  const { now, eat, eol, match, jump, substring, getChar } = reader
  const start = props.start ?? { ...now() }
  const end = props.end ?? { ...eol() }
  jump(start)

  let cursor: Point = { ...start }

  const _tokens: Token[] = []

  const tokLink = (): Link | undefined => {
    const m = match(/^\[\[([^\]]*)\](?:\[([^\]]*)\])?\]/m)
    if (!m) return undefined
    const linkInfo = uri(m.captures[1])
    if (linkInfo) {
      const { value, ...rest } = linkInfo;
      return tk.tokLink(value, { ...rest, description: m.captures[2], position: m.position });
    }
  }

  const tokFootnoteAnonOrInline = (): Token[] => {
    const tokens: Token[] = [];

    let m = match(/^\[fn:(\w*):/);
    if (!m) return [];
    tokens.push(tk.tokFootnoteInlineBegin(m.captures[1], { position: m.position }));
    jump(m.position.end);

    m = match(/^\]/);
    if (m) {
      // empty body
      tokens.push(tk.tokText('', { position: { start: m.position.start, end: m.position.start, indent: m.position.indent } }));
    } else {
      tokens.push(...tokenize({ reader }, { ignoring: [']'] }));
    }

    m = match(/^\]/);
    if (!m) return [];
    tokens.push(tk.tokFootnoteReferenceEnd({ position: m.position }));

    jump(tokens[0].position.start);

    return tokens;
  }

  const tokFootnote = (): FootnoteReference | undefined => {
    const m = match(/^\[fn:(\w+)\]/);
    if (m) {
      return tk.tokFootnoteReference(m.captures[1], { position: m.position });
    }
  }

  const tokStyledText = (marker: string) => (): StyledText | undefined => {
    const m = match(
      RegExp(`^${escape(marker)}(${BORDER}(?:.*?(?:${BORDER}))??)${escape(marker)}(?=(${POST}.*))`, 'm'))
    if (!m) return undefined
    const value = m.captures[1];
    if (ignoring.some(c => value.includes(c))) {
      return;
    }
    return {
      type: MARKERS[marker],
      value,
      position: m.position,
    }
  }

  const tryToTokens = (tok: () => Token[]) => {
    const tokens = tok()
    if (tokens.length === 0) return false
    cleanup()
    _tokens.push(...tokens)
    jump(tokens[tokens.length - 1].position.end)
    cursor = { ...now() }
    return true
  }

  const tryTo = (tok: () => Token | undefined) => {
    return tryToTokens(() => {
      const r = tok();
      return r ? [r] : [];
    });
  }

  const cleanup = () => {
    if (isEqual(cursor, now())) return
    const position = { start: { ...cursor }, end: { ...now() } }
    const value = substring(position)
    _tokens.push(tk.tokText(value, { position: position }));
  }

  const tokNewline = (): Newline | undefined => {
    const m = match(/^\n/)
    if (!m) return undefined
    return tk.tokNewline({ position: m.position });
  }

  const tok = (): Token[] | undefined => {
    if (isEqual(now(), end)) {
      return
    }
    const char = getChar()

    if (ignoring.includes(char)) {
      return [];
    }

    if (char === '[') {
      if (tryTo(tokLink)) return tok()
      if (tryTo(tokFootnote)) return tok()
      if (tryToTokens(tokFootnoteAnonOrInline)) return tok();
    }

    if (MARKERS[char]) {
      const pre = getChar(-1)
      if (now().column === 1 || /[\s({'"]/.test(pre)) {
        if (tryTo(tokStyledText(char))) return tok()
      }
    }

    if (tryTo(tokNewline)) return tok()

    eat()
    tok()
  }

  tok()
  cleanup()
  return _tokens

}
