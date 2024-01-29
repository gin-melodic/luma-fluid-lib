export class XAttribute {
  name: string
  location: number
  itemCount: number
  byteSize: number
  type = 5126 // Assuming 5126 is a constant value relevant to the context

  constructor(name: string, location: number, count: number = 1) {
    this.name = name
    this.location = location
    this.itemCount = count
    this.byteSize = count * 4
  }
}
