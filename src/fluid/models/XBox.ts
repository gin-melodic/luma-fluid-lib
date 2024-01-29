import {XArray} from "./XArray.ts";

export class XBox<T> {
  content = new Map<string, T>()

  get(key: string) {
    return this.content.get(key)
  }

  remove(key: string) {
    return this.content.delete(key)
  }

  keys() {
    const a: number[] = []
    this.content.forEach((_, key) => {a.push(+key)})
    return new XArray(a)
  }
}
