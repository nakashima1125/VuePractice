/*
https://typescriptbook.jp/
変数の代入可否を、構造が互換しているかに着目して判定してくれる。
*/

type Summary = { name: string };
type Detail = { name: string; age: number };

const kunstDetail: Detail = { name: "kunst", age: 28 };

// 構造的部分型として互換があるので、代入できる。
const summary: Summary = kunstDetail;

console.log(summary);
