// import { Container, Sprite, Text } from "pixi.js";
// import { store } from "./store";

// export class MainView extends Container {
//   public constructor() {
//     super();
//   }

//   public rebuild(): void {
//     console.warn("main view rebuild");
//   }

//   public build(): void {
//     console.warn("main view build");
//     const array = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
//     const animals = new Container();
//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//         const name = array[j + 3 * i];
//         const animal = new Container();
//         const img = Sprite.from("assets/images/" + name + ".png");
//         img.scale.set(0.5, 0.5);
//         img.anchor.set(0.5);

//         const nameTxt = new Text(name);
//         nameTxt.anchor.set(0.5);

//         animal.addChild(img);
//         animal.addChild(nameTxt);
//         animal.position.set(j * 300, i * 300);

//         animals.addChild(animal);
//       }
//     }

//     this.addChild(animals);
//     animals.position.set(store.app.renderer.width / 2, store.app.renderer.height / 2);
//   }
// }

import { Container, Graphics } from "pixi.js";
import { randomColor } from "./randomColor";
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
    const container = new Container();
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const redRect = new Graphics();
        redRect.beginFill(0xff0000);
        redRect.drawRoundedRect(0, 0, 100, 100, 30);
        redRect.position.set(j * 105, i * 105);
        container.addChild(redRect);
      }
    }
    this.addChild(container);
    container.position.set(
      (store.app.viewBounds.width - container.width) / 2,
      (store.app.viewBounds.height - container.height) / 2
    );
    const q = new Container();
    for (let i = 0; i < 3; i++) {
      const redRect = new Graphics();
      redRect.beginFill(randomColor());

      redRect.drawRoundedRect(0, 0, 100, 100, 30);
      redRect.position.set(i * 105, 305);
      q.addChild(redRect);
    }
    this.addChild(q);
    q.position.set(
      (store.app.viewBounds.width - q.width) / 2,
      store.app.viewBounds.height - store.app.viewBounds.height
    );
  }
}

// export class MainView extends Container {
//   public constructor() {
//     super();
//   }

//   public rebuild(): void {
//     console.warn("main view rebuild");
//   }

//   public build(): void {
//     console.warn("main view build");

//     const containers = new Container();

//     for (let i = 0; i < 3; i++) {
//       const container = new Container();
//       for (let j = 0; j < 3; j++) {
//         const redRect = new Graphics();
//         redRect.beginFill(0xff0000);
//         redRect.drawRect(0, 0, 300, 300);
//         store.app.stage.addChild(redRect);
//         container.addChild(redRect);
//         this.addChild(container);
//       }
//       containers.addChild(container);
//     }
//     this.addChild(containers);
//   }
// }
