/*
https://typescriptbook.jp/
変数の代入可否を、構造が互換しているかに着目して判定してくれる。
*/
var kunstDetail = { name: "kunst", age: 28 };
// 構造的部分型として互換があるので、代入できる。
var summary = kunstDetail;
console.log(summary);
