import type { TagColor } from './type'

const color: {
  [keyName: string]: string
} = {
  yello: '#f7cf4f',
  blueGreen: '#6fe6e4',
  green: '#71da88',
  orange: '#ee8030',
}

export default (colorName: TagColor) => color[colorName] ?? '#f00'
