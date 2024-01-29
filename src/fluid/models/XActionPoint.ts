export class XActionPoint {
  type
  x
  y
  buttonState
  pressure
  radius
  angle
  altitudeAngle
  azimuthAngle
  constructor(type: number, x: number, y: number, buttonState: number, pressure: number, radius: number, angle: number, altitudeAngle: number, azimuthAngle: number) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.buttonState = buttonState;
    this.pressure = pressure;
    this.radius = radius;
    this.angle = angle;
    this.altitudeAngle = altitudeAngle;
    this.azimuthAngle = azimuthAngle;
  }
}
