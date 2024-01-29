import {XBracket} from "../models/XBracket.ts";
import {XOptionalString} from "../models/XOptionalString.ts";
import {ObjectExtension} from "./ObjectExtension.ts";

export const Tools = {
  substr: (source: string, start = 0, end = source.length) => {
    let cStart = start;
    let cEnd = end;
    if (end < 0) { cEnd = source.length + end; }
    if (start > cEnd) { [cStart, cEnd] = [cEnd, cStart]; }
    return source.substring(cStart, cEnd);
  },

  remove: <T>(list: T[], item: T) => {
    const index = list.indexOf(item);
    if (index !== -1) {
      list.splice(index, 1);
      return true
    }
    return false
  },

  // remove all comments
  stripComments: (source: string) => {
    const b = RegExp("(/\\*([\\s\\S]*?)\\*/)|(//(.*)$)", "igm".split("u").join(""));
    return source.replace(b, "");
  },

  now() {
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      return performance.now();
    }
    return Date.now();
  },

  bracketExplode(str: string, flag: string) {
    if (flag.length !== 2) { return null }
    let currentChar = ''
    const openBracket = flag.charAt(0)
    const closeBracket = flag.charAt(1)
    const rootBracket = new XBracket()
    let currentBracket = rootBracket
    const bracketStack: XBracket[] = []
    let currentContent: XBracket | XOptionalString | null = null
    for (let i = 0; i < str.length; i++) {
      currentChar = str.charAt(i)
      if (currentChar === openBracket) {
        const newBracket = new XBracket(flag);
        (currentBracket.contents as XBracket[]).push(newBracket);
        bracketStack.push(currentBracket);
        currentBracket = newBracket;
        currentContent = newBracket;
      } else if (currentChar === closeBracket) {
        currentBracket = bracketStack.pop() as XBracket;
        currentContent = currentBracket;
      } else {
        if (!(currentContent instanceof XOptionalString)) {
          currentContent = new XOptionalString();
          (currentBracket.contents as XOptionalString[]).push(currentContent);
        }
        (ObjectExtension.cast(currentContent, XOptionalString) as XOptionalString).contents += currentChar;
      }
    }
    return rootBracket
  },

  compressedToExploded: (bracket: XBracket, targetPos: number) => {
    let optionalLength = 0
    let totalLength = 0
    for (let index = 0; index < bracket.contents.length; index++) {
      const content = bracket.contents[index]
      const contentLength = content.toString().length
      if (content instanceof XOptionalString) {
        if (optionalLength + contentLength > targetPos) break;
        optionalLength += contentLength;
      }
      totalLength += contentLength;
    }
    return targetPos - optionalLength + totalLength;
  },

  injectConstValue: (str: string, _target: string, _seg: string) => {

    // const ct = ShareConstants.STORAGE_QUALIFIER_TYPE.content.get('const') as string[]
    // const regStr = "const\\s+((" + ShareConstants.PRECISION_QUALIFIERS.join("|") + ")\\s+)?(" + ct.join("|") + ")\\s+([^;]+)"
    // const reg = new RegExpHelper(regStr, "m")
    const stripStr = Tools.stripComments(str)
    // let i = stripStr;
    // TODO: reg has a bug, it will match the wrong string
    return stripStr

    // while (reg.match(i)) {
    //   const oPos = reg.matchedPos()
    //   const quote = Tools.bracketExplode(reg.matched(0), '()');
    //   if (!quote) continue;
    //   const fold = XFold.fold(quote.contents as XOptionalString[], (optStr, str) => {
    //     return str + optStr.toString()
    //   }, "")
    //   const iReg = new RegExpHelper(`\\b(${target})\\b\\s*=`, "m");
    //   if (iReg.match(fold)) {
    //     const pos = reg.matchedPos()
    //     let x = iReg.matchedRight().indexOf(',')
    //     if (x === -1) {
    //       x = reg.matchedRight().length
    //     }
    //     const dx = pos.pos + pos.len + x;
    //     const globalOffset = stripStr.length - i.length + oPos.pos
    //     const expOri = Tools.compressedToExploded(quote, pos.pos + pos.len) + globalOffset
    //     const expNext = Tools.compressedToExploded(quote, dx) + globalOffset
    //     const leftPart = stripStr.substring(0, expOri)
    //     const rightPart = stripStr.substring(expNext)
    //     return `${leftPart}${seg}${rightPart}`
    //   }
    //   i = reg.matchedRight()
    // }
    // return null
  },

  // Find the largest power of 2 that is not greater than the given number
  // e.g. 5 -> 4, 7 -> 4, 8 -> 8, 9 -> 8
  floorPowerOf2: (value: number) => {
    // e.g. 5.9 -> 5
    let b = Math.floor(value);
    // e.g 5 -> 4
    b |= b >> 1;
    // e.g. 4 -> 7
    b |= b >> 2;
    // e.g. 7 -> 15
    b |= b >> 4;
    // e.g. 15 -> 16
    b |= b >> 8;
    // (b |= b >> 16) is 8
    // b >> 1 is 4
    // 8 - 4 = 4
    return (b |= b >> 16) - (b >> 1);
  },

  log2: (value: number) => {
    return Math.log(value) * 1.4426950408889634;
  },
}
