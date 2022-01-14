import { Container, Graphics } from "pixi.js";
import { Board } from "./board";
import { Queue } from "./queue";
import { Score } from "./score";
import { store } from "./store";

export class MainView extends Container {
  private _board: Board;
  private _queue: Queue;
  private _score: Score;

  public rebuild(): void {
    this._repositionBoard();
    this._repositionQueue();
    this._repositionScore();

    this._board.rebuild();
    this._queue.rebuild();
    this._score.rebuild();
  }

  public build(): void {
    this._buildBoard();
    this._buildQueue();
    this._buildScore();

    this.rebuild();
  }

  private _buildBoard(): void {
    this._board = new Board();
    this.addChild(this._board);
  }

  private _buildQueue(): void {
    this._queue = new Queue();
    this.addChild(this._queue);
  }

  private _buildScore(): void {
    this._score = new Score();
    this.addChild(this._score);
  }

  private _repositionBoard(): void {
    this._centralize(this._board, { x: 0, y: 0 });
  }

  private _repositionQueue(): void {
    this._centralize(this._queue, { x: 0, y: -this._board.height / 2 - 100 });
  }

  private _repositionScore(): void {
    this._centralize(this._score, { x: 0, y: this._board.height / 2 - 100 });
  }

  private _centralize(target: Container | Graphics, offset: { x: number; y: number }): void {
    const { width, height } = store.app.viewBounds;

    target.position.set((width - target.width) / 2 + offset.x, (height - target.height) / 2 + offset.y);
  }
}
