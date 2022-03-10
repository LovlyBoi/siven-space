export function resolveResponceData(data: any) {
  for(const card of data) {
    if(typeof card.publishDate === 'string') {
      card.publishDate = new Date(card.publishDate)
    }
    if(typeof card.updateDate === 'string') {
      card.updateDate = new Date(card.updateDate)
    }
  }
  return data
}