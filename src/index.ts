import "./index.css";

//import "./chapter-01";

//import "./chapter-03";

import "./pluralsight-lectures/index";
import "./pluralsight-lectures/person";
import "./pluralsight-lectures/player";
import "./pluralsight-lectures/result";
import "./pluralsight-lectures/scoreboard";
import "./pluralsight-lectures/utility";
import "./pluralsight-lectures/game";

import { add } from "./common/math";

export class C {
  private x = 17;
  getX = () => this.x;
  setX = (newVal: number) => {
    this.x = newVal;
  };
}

export let x = new C();
export let y = { ...{ some: "value" } };

console.log(add(3, 4));
