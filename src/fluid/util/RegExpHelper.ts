import {Tools} from "./Tools.ts";

export class XRegExp extends RegExp {
  matched: RegExpExecArray | null = null
  original: string = ''
  constructor(pattern: RegExp | string, flags?: string) {
    super(pattern, flags)
  }
}

export class RegExpHelper {
  reg: XRegExp

  constructor(str: string, seg: string) {
    this.reg = new XRegExp(str, seg.split('u').join(''))
  }

  match(str: string) {
    if (this.reg.global) {
      this.reg.lastIndex = 0;
    }
    this.reg.matched = this.reg.exec(str);
    this.reg.original = str;
    return this.reg.matched !== null
  }

  matched(index: number) {
    if (this.reg.matched !== null && index >= 0 && index < this.reg.matched.length) {
      return this.reg.matched[index]
    }
    throw new Error('RegExpHelper: matched index out of range')
  }

  matchedRight() {
    if (!this.reg.matched) {
      throw new Error('RegExpHelper: no matched')
    }
    const index = this.reg.matched.index + this.reg.matched[0].length
    return Tools.substr(this.reg.original, index, this.reg.original.length - index);
  }

  matchedPos() {
    if (!this.reg.matched) {
      throw new Error('RegExpHelper: no matched')
    }
    return {
      pos: this.reg.matched.index,
      len: this.reg.matched[0].length
    }
  }

  matchSub(str: string, index: number, len: number = -1) {
    let result = false
    if (this.reg.global) {
      this.reg.lastIndex = index;
      this.reg.matched = this.reg.exec(len < 0 ? str : Tools.substr(str, 0, index + len));
      result = this.reg.matched != null;
      if (result) {
        this.reg.original = str;
      }
    } else {
      result = this.match(len < 0 ? Tools.substr(str, index) : Tools.substr(str, index, len));
      if (result) {
        this.reg.original = str;
        if (this.reg.matched !== null) {
          this.reg.matched.index += index;
        }
      }
    }
    return result;
  }
}
