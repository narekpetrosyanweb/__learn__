import { Container, Sprite, Ticker } from "pixi.js";
import { store } from "./store";

export class MainView extends Container {
  private _img: Sprite;

  public constructor() {
    super();
  }

  public rebuild(): void {
    const { width, height } = store.app.viewBounds;
    this._img.position.set(width / 2, height / 2);
  }

  public build(): void {
    console.warn("main view build");
    const img = Sprite.from("assets/images/pig.png");
    img.anchor.set(0.5, 0.5);

    store.app.ticker.add(animate);
    // console.warn(store.app.renderer.width);

    this.addChild(img);

    function animate(): void {
      img.rotation += 0.1;
      console.warn(img.rotation);
    }

    Ticker.shared.add(animate);

    this._img = img;
  }
}
