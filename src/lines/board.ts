import { Container, utils } from "pixi.js";
import { Ball } from "./ball";
import { Cell } from "./cell";
import gameconfig from "./gameconfig.json";
export class Board extends Container {
  public constructor() {
    super();

    this.build();
  }

  public rebuild(): void {
    //
  }

  public build(): void {
    const { boardsize, cellWidth } = gameconfig;
    const array = Array(boardsize)
      .fill([])
      .map(() => Array(boardsize).fill(0));

    for (let i = 0; i < boardsize; i++) {
      for (let j = 0; j < boardsize; j++) {
        const cell = new Cell(cellWidth, 0x858585);
        cell.position.set(i * (cell.width + 6), j * (cell.height + 6));

        cell.interactive = true;

        cell.on("pointerdown", function () {
          const ball = new Ball(
            gameconfig.ballWidth / 2,
            utils.string2hex(gameconfig.arr[Math.floor(Math.random() * gameconfig.arr.length)])
          );
          this.interactive = false;
          ball.position.set(6, 6);
          console.warn(this.children);
        });

        array[i][j] = cell;

        this.addChild(cell);
      }
    }

    const ball = new Ball(
      gameconfig.ballWidth / 2,
      utils.string2hex(gameconfig.arr[Math.floor(Math.random() * gameconfig.arr.length)])
    );
    ball.position.set(6, 6);
    array[3][4].addChild(ball);
    console.warn(array);
  }
}
