// ===は異なる型を比較する
console.log(1 === "1");

// 異なる型で==を用いると暗黙的に変換する。良くないので===を用いること
console.log(1 == "1");
console.log(0 == false);
console.log(100 == [100]);

// 様々な暗黙的な型の変換
console.log(1 + "2");
console.log("1" + "2");

// 暗黙的な型変換での結果は、オペランドの型に依存する。
const x = 1, y = "2", z = 9;
console.log(x + y + z);
console.log(y + z + x);
console.log(x + z + y);

// falseと出力される
Boolean(0);
Boolean(undefined);
Boolean("");
Boolean(null);

/* 明示的な型変換 */
// 数値へ変換する
const num = Number("100");
console.log(typeof num);
console.log(num);

// 文字列へ変換する
const mozi = String(100);
console.log(typeof mozi);
console.log(mozi);

// 10進数への変換
console.log(Number.parseInt("1", 10));
console.log(Number.parseInt("42.5px"));
console.log(Number.parseInt("10.5", 10));

// NaN(Not a Number)は特殊なNumber型
console.log(isNaN(NaN));

// 空文字化の判断
function isEmptyString(str) {
  // strがfalsyならtrueを返す。""はfalseと出るから。
  return !Boolean(str);

}
console.log(isEmptyString(""));





