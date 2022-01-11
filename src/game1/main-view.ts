import { Container, Sprite, Text } from "pixi.js";
import { store } from "./store";

export class MainView extends Container {
  public constructor() {
    super();
  }

  public rebuild(): void {
    console.warn("main view rebuild");
  }

  public build(): void {
    console.warn("main view build");
    const array = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
    const animals = new Container();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const name = array[j + 3 * i];
        const animal = new Container();
        const img = Sprite.from("assets/images/" + name + ".png");
        img.scale.set(0.5, 0.5);
        img.anchor.set(0.5);

        const nameTxt = new Text(name);
        nameTxt.anchor.set(0.5);

        animal.addChild(img);
        animal.addChild(nameTxt);
        animal.position.set(j * 300, i * 300);

        animals.addChild(animal);
      }
    }

    this.addChild(animals);
    animals.position.set(store.app.renderer.width / 2, store.app.renderer.height / 2);
  }
}
