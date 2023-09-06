// Object.prototypeオブジェクトにtoStringメソッドの定義があることの確認
console.log(typeof Object.prototype.toString);

// `obj`インスタンスは`Object.prototype`に定義されたものを継承
// `obj.toString`は継承した`Object.prototype.toString`を参照
const obj = {
  key: "value",
};
console.log(obj.toString === Object.prototype.toString);

// 静的メソッドとin演算子
const obj2 = {};
console.log(Object.hasOwn(obj2, "toString"));
console.log("toString" in obj);
