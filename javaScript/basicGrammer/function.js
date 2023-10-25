// 引数に何もいれないとundefiendが入る
// あふれた引数は無視される
function test1(a, b) {
  return [a, b];
}
console.log(test1(1));
console.log(test1(1, 2));
console.log(test1(1, 2, 3));

// 可変長引数
const max = Math.max(1, 2, 100, 4);
console.log(max);

/*
残余引数。...をつけることでargsという変数に配列が代入される
*/
function fn1(...args) {
  console.log(args);
}

function fn2(arg1, ...args) {
  console.log(arg1);
  console.log(args);
}
fn2("a", 2, "b"); 

/*
arguments。インデックスで各要素にアクセスできる。
*/
function fn3() {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}
const test3 = [1, 2, "r"];
fn3(test3[0], test3[1], test3[2]);


// 配列のオブジェクトやパロティだけを使用する。
function fn4(user) {
  console.log(user);
}
const user = {
  id: 42
};
fn4(user);

// 関数は()を取り除くとオブジェクト。
function fn5() {
  console.log("fn5が呼ばれました");
}
const myFunc = fn5;
myFunc();


// 関数式
// 関数式では関数名を省略できる。ここでは省略はしていない。
const test6 = function fn6(n6) {
  if (n6 === 0) {
    return 1;
  }
  return n6 * fn6(n6 - 1);
};
console.log(test6(3));

// アロー関数
const fn7 = n7 => { return n7 * n7 };
console.log(fn7(3));

