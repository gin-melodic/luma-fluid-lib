export class XKeys<T> {
  content = new Map<string, T>()
  keys: string[] = []
  length = 0
  current = 0

  constructor(content: Map<string, T>) {
    this.content = content
    this.keys = Object.keys(content)
    this.length = content.size
  }

  hasNext() {
    return this.current < this.length
  }

  next() {
    return this.keys[this.current++]
  }
}
