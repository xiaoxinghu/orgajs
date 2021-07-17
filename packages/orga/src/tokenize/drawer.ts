import { Reader } from '../reader'
import { Token } from '../types'
import { tokDrawerBegin, tokDrawerEnd } from './util';

interface Props {
  reader: Reader;
}

export default ({ reader }: Props): Token[] => {
  const { match, eat } = reader

  const m = match(/^:(\w+):(?=\s*$)/)
  if (m) {
    eat('line')
    const name = m.captures[1]
    const position = m.position;
    if (name.toLowerCase() === 'end') {
      return [tokDrawerEnd({ position })];
    } else {
      return [tokDrawerBegin(name, { position })];
    }
  }

  return []
}
