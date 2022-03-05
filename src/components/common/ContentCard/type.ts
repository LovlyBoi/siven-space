export type TagColor = 'yellow' | 'blueGreen' | 'green' | 'orange'

export interface CardTag {
  name: string
  color: TagColor
}

export interface ContentCardProps {
  tag: CardTag
  publishDate: Date
  upateDate: Date
  title: string
  pictures: string[]
  id: number
}
