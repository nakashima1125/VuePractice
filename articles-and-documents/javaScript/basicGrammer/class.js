// 基本的な形
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const point = new Point(3, 4);
console.log(point.x);

// インクリメント
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}
const counterA = new Counter();
counterA.increment();
counterA.increment();

console.log(counterA.count);

// ゲッターとセッター
class NumberWrapper {
  constructor(value) {
    this._value = value;
  }

  get value() {
    console.log("getterなう");
    return this._value;
  }

  set value(newValue) {
    console.log("setterなう");
    this._value = newValue;
  }
}

const numberWrapper = new NumberWrapper(1);
console.log(numberWrapper.value);
numberWrapper.value = 42;
console.log(numberWrapper.value);

// 関数を値として扱う
class Counter2 {
  count = 0; // up関数はincrementメソッドを呼び出す。
  // アロー関数
  up = () => {
    this.increment();
  };
  increment() {
    this.count++;
  }
}

const counter2 = new Counter2();
counter2.up();
console.log(counter2.count);

// プライベートフィールドはクラス内でのみ参照可能
class PrivateExsampleClass {
  // プライベートフィールドは#をつける。
  #privateVlaue = 1;
  dump() {
    console.log(this.#privateVlaue);
  }
}
const privateExsampleClass = new PrivateExsampleClass();
console.log(privateExsampleClass.dump);

//プライベートフィールドはgetterとsetter経由のみ参照できる。
class Test {
  #value;
  constructor(value) {
    this.#value = value;
  }

  get value() {
    return this.#value;
  }

  set value(new_value) {
    this.#value = new_value;
  }
}
const test = new Test(1);
console.log(test.value);

// staticフィールド：インスタンス化しなくても利用できる。
class Colors {
  static GREEN = "緑";
  static RED = "赤";
  static #BLUE = "青";

  static outputPrivate() {
    console.log(this.#BLUE);
  }
}
// インスタンス化しなくても参照できる。
console.log(Colors.GREEN);
// クラス内からプライベートフィールドを参照できる
Colors.outputPrivate();

// 継承
class Parent {
  constructor() {
    this.name = "hello";
  }

  method() {
    console.log("Parent method");
  }
}

class Child extends Parent {
  constructor() {
    super();
  }
  method() {
    console.log(this.name);
    super.method();
  }
}
const child = new Child();
child.method();
