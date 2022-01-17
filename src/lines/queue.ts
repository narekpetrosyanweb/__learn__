import { Container, utils } from "pixi.js";
import { Ball } from "./ball";
import gameconfig from "./gameconfig.json";

export class Queue extends Container {
  public ballsColor: number[] = [];
  public constructor() {
    super();

    this.build();
  }

  public rebuild(): void {
    console.log("queue rebuild");
  }

  public build(): void {
    for (let i = 0; i < gameconfig.queuesize; i++) {
      const color = this.getRndClr();

      this.ballsColor[i] = color;
      const ball = new Ball(gameconfig.ballWidth / 2, color);
      ball.position.set(i * (ball.width + 6), 0);
      this.addChild(ball);
    }
  }

  public getRndClr(): number {
    return utils.string2hex(gameconfig.arr[Math.floor(Math.random() * gameconfig.arr.length)]);
  }
}
