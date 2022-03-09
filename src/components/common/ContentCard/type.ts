export type TagColor = 'yellow' | 'blueGreen' | 'green' | 'orange'

export interface CardTag {
  name: string
  color: TagColor
}

export interface ContentCardProps {
  tag: CardTag
  author: string
  // body: string
  publishDate: Date
  updateDate: Date
  title: string
  pictures: string[]
  id: number
  meta?: {
    [key: string]: any
  }
}
