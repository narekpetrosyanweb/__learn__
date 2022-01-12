import { Container } from "pixi.js";
import { Cell } from "./cell";
import gameconfig from "./gameconfig.json";
import { store } from "./store";

export class Board extends Container {
  public ischanged: number;
  public constructor() {
    super();
    this.build();
  }

  public build(): void {
    const { boardsize, cellWidth, queuessize } = gameconfig;
    cellWidth;

    for (let i = 0; i < boardsize; i++) {
      for (let j = 0; j < boardsize; j++) {
        const cell = new Cell(cellWidth);
        cell.position.set(i * (cell.width + 6), j * (cell.height + 6));
        this.addChild(cell);
      }
    }

    const container = new Container();

    for (let i = 0; i < queuessize; i++) {
      const cell = new Cell(cellWidth);
      cell.position.set(i * (cell.width + 6), -(cell.width + 35));
      container.addChild(cell);
    }
    this.addChild(container);
    container.position.set((cellWidth + 6) * 3, 0);
    this.position.set((store.app.viewBounds.width - this.width) / 2, (store.app.viewBounds.height - this.height) / 2);
  }
}
