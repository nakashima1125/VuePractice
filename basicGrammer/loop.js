// constでは再代入できないので使うことができない。
let x = 0;

console.log(`ループ開始前のxの値:${x}`);
while (x < 2) {
  console.log(x);
  x += 1;
}
console.log(`ループ終了後のxの値:${x}`);

// do-while文
const x2 = 1000;
do {
  console.log(x2);
} while (x2 < 10);

// for文
let total = 0;
for (let i = 0; i < 10; i++) {
  total += i + 1;
}
console.log("totalの値は" + total);

// 関数との組み合わせ
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers; i++) {
    total += numbers[i];
  }
  return total;
}

// forEachメソッド
const array = ["a", "b", "c"];
array.forEach((test) => {
  console.log(test);
});

// someメソッド：偶数を含むかの確認をする。
function isEven(num) {
  return num % 2 === 0;
}
const numbers = [1, 2, 3, 5, 8];
console.log(numbers.some(isEven));

// continue文
// 例としてwhile文の中で使用されると、その反復処理はそこで終了する。
function filterEven(numbers) {
  const results = [];
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (!isEven(num)) {
      // 偶数でない(false)なら次のfor文へいく
      continue;
    }
    results.push(num);
  }
  return results;
}
const array2 = [1, 2, 4, 6, 8, 10];
console.log(filterEven(array2));

// filterメソッド：配列から特定の要素だけを集めて新しい要素を作る。
console.log(array2.filter(isEven));

//  for...in文：オブジェクトのパロティに対して反復処理をする。
const obj = {
  a: 1,
  b: 2,
};
for (const key in obj) {
  const value = obj[key];
  console.log(`key:${key}, value:${value}`);
}

// for...in文：だめなパターン
// 要素のインデックスを文字列化し、それを加算してしまう。
const numbers2 = [5, 11];
let total3 = 0;
for (const num in numbers2) {
  total3 += num;
}
console.log(total3);

// for...of文：配列や文字列の値を順に取り出せる。
const array3 = [1, 2, 3];
const str_ary = "藤堂高虎";
for (const value3 of array3) {
  console.log(value3);
}
for (const value4 of str_ary) {
  console.log(value4);
}
