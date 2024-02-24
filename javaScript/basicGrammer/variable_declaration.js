// constは再代入できない変数の宣言。必ずしも定数で定義されているわけではない。
// while文で+=する場合の再代入では使用できない。
const test = "value";
const booktitle = "みんなのpython";

// letは再代入可能な変数の宣言 
let bookName = "情報処理安全確保支援士入門";

/* 
letは再代入可能な変数の宣言。
varは意図せずに変数を再定義してできてしまう欠点がある。
使用は推奨しない。
*/
var BOOKTITLE = "データベーススペシャリスト入門";

console.log(test);
console.log(booktitle);
console.log(bookName);
console.log(BOOKTITLE);
