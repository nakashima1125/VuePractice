// .callメソッド：関数.call(thisの値, ...関数の引数)でthisにオブジェクト値を明示的に参照させる。
function say(message) {
  return `${message} ${this.fullName}`;
}

const person = {
  fullName: "Bredan",
};
console.log(say.call(person, "こんにちは"));
