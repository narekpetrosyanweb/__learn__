import { Graphics } from "pixi.js";

export class Ball extends Graphics {
  public constructor(radius: number, clr: number) {
    super();

    this.createBall(radius, clr);
  }

  public createBall(radius: number, clr: number): void {
    this.beginFill(clr);
    this.drawCircle(radius, radius, radius);
    this.lineStyle(5, 0x6bfd00, 1);
  }
}
