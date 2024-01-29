import {XKeys} from "./XKeys.ts";

export class XDict<T> {
  content: Map<string, T> = new Map<string, T>()

  get(key: string) {
    return this.content.get(key)
  }

  keys() {
    return new XKeys(this.content)
  }
}
