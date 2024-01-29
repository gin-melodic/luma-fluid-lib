export class XArray<T> {
  current = 0
  array: T[] = []

  constructor(array: T[]) {
    this.array = array
  }

  hasNext() {
    return this.current < this.array.length
  }

  next() {
    return this.array[this.current++]
  }
}
