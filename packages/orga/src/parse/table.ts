import { push } from '../node'
import { Lexer } from '../tokenize'
import { Table, TableRow, TableRule, TableCell, Parent } from '../types'
import { isPhrasingContent } from '../utils';

export default (lexer: Lexer): Table | undefined => {
  const { peek, eat } = lexer

  const token = peek()
  if (!token || !token.type.startsWith('table.')) return undefined

  const getCell = (cell: TableCell = undefined): TableCell => {
    const t = peek()
    if (!t || t.type === 'newline' || t.type === 'table.columnSeparator') {
      return cell
    }
    const c = cell || { type: 'table.cell', children: [] }
    if (isPhrasingContent(t)) {
      push(c)(t)
      eat()
    } else {
      return undefined;
    }
    return getCell(c)
  }

  const getRow = (row: TableRow = undefined): TableRow | TableRule => {
    const t = peek()
    if (!t) {
      return row
    }
    if (t.type === 'table.hr' && row === undefined) {
      eat()
      return t
    }
    if (t.type === 'table.columnSeparator') {
      eat('table.columnSeparator')
      const _row = row || { type: 'table.row', children: [] }
      push(_row)(getCell())
      return getRow(_row)
    }
    return row
  }

  const parse = (table: Table = undefined): Table => {
    const row = getRow()
    if (!row) {
      return table
    }

    const _table = table || { type: 'table', children: [], attributes: {} }

    push(_table)(row)
    eat('newline')
    return parse(_table)
  }

  return parse()

}
