import { Container, Graphics } from "pixi.js";

export class Cell extends Container {
  public constructor(size: number, reccolor: number) {
    super();
    this.createBlankgraf(size, reccolor);
  }

  public createBlankgraf(size: number, reccolor: number): void {
    const rect = new Graphics();
    rect.beginFill(reccolor);
    rect.drawRoundedRect(0, 0, size, size, 0);
    this.addChild(rect);
  }
}
