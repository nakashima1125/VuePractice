// 関数の書き方
function test1(a, b) {
  return a+b;
}
const a = 1;
const b = 2;
const test = test1(a, b);
console.log(test); 

// アロー関数に分解する。
(a, b) => {
  return a + b;
}