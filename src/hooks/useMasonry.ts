import Masonry from 'masonry-layout'

export default function(selector: string, payload = {}) {
  new Masonry(selector, payload)
}