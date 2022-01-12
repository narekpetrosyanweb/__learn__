import { Container, Sprite } from "pixi.js";
import { Board } from "./board";

export class MainView extends Container {
  private _sprite: Sprite;
  public constructor() {
    super();
  }

  public rebuild(): void {
    //
  }

  public build(): void {
    const board = new Board();
    this.addChild(board);
  }
}
