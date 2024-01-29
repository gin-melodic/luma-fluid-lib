import {XOptionalString} from "./XOptionalString.ts";

export class XBracket {
  closeBracket = ''
  openBracket = ''
  contents: string | XOptionalString[] | XBracket[] = []
  constructor(str?: string) {
    if (!str) { return }
    this.openBracket = str.charAt(0)
    this.closeBracket = str.charAt(1)
  }

  toString() {
    let str = this.openBracket
    for (let i = 0; i < this.contents.length; i++) {
      str += this.contents[i].toString()
    }
    return str + this.closeBracket
  }
}
