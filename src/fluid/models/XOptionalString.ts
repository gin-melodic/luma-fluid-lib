import {XBracket} from "./XBracket.ts";

export class XOptionalString {
  contents: string | XOptionalString[] | XBracket[]
  constructor(str?: string) {
    if (!str)  {
      this.contents = ""
      return
    }
    this.contents = str
  }

  toString: () => string = () => {
    return this.contents as string
  }
}
