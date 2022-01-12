import { Container, Graphics, utils } from "pixi.js";
import { Ball } from "./ball";

export class Cell extends Container {
  public ball: Ball;
  public constructor(size: number) {
    super();
    this.createBlankgraf(size);
  }

  public createBlankgraf(size: number): void {
    const color = utils.rgb2hex([1.0, 0, 0]);
    const rect = new Graphics();
    rect.beginFill(0x5f6ff0f);
    rect.drawRoundedRect(0, 0, size, size, 0);
    const ball = new Ball(size / 2, color);
    // ball.visible = true;
    this.ball = ball;
    this.addChild(rect);
    this.addChild(ball);
  }

  public showBall(): void {
    this.ball.visible = true;
  }
}
