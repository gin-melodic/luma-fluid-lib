import {XArray} from "./XArray.ts";
import {XOptionalString} from "./XOptionalString.ts";

export class XFold {
  static fold(obj: XOptionalString[], action: (optStr: XOptionalString, str: string) => string, addition: string) {
    const arr = new XArray(obj)
    while (arr.hasNext()) {
      addition = action(arr.next(), addition)
    }
    return addition
  }
}
