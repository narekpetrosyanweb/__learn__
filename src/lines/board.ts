import { Container } from "pixi.js";
import { Ball } from "./ball";
import { Cell } from "./cell";
import gameconfig from "./gameconfig.json";
import { Queue } from "./queue";
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
        if ((i + j) % 2 === 0) {
          const cell = new Cell(cellWidth, 0x858585);
          cell.position.set(i * (cell.width + 6), j * (cell.height + 6));
          cell.interactive = true;

          cell.on("pointerdown", function () {
            console.warn(this.children[1]);
            this.removeChild(this.children[1]);
          });

          array[i][j] = cell;
          this.addChild(cell);
        } else {
          const cell = new Cell(cellWidth, 0x000f0f);
          cell.position.set(i * (cell.width + 6), j * (cell.height + 6));
          cell.interactive = true;

          cell.on("pointerdown", function () {
            console.warn(this.children[1]);
            this.removeChild(this.children[1]);
          });

          array[i][j] = cell;
          this.addChild(cell);
        }
      }
    }

    const queue = new Queue();

    for (let i = 0; i < 3; i++) {
      const ball = new Ball(gameconfig.ballWidth / 2, queue.ballsColor[i]);

      // const queue = new Queue();

      const x = Math.floor(Math.random() * 9);
      const y = Math.floor(Math.random() * 9);

      ball.position.set(7, 7);
      array[x][y].addChild(ball);
    }

    console.warn(array);
  }
}
