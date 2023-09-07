//  RegExp.prototype.execでのString.prototype.matchAll
const str = "ABC あいう 123 DE えお 45";

/*
正規表現 /[a-zA-Z]+/ は、テキスト内でアルファベットの連続した文字列（単語や単語の一部など）を検索するためのパターン
/は正規表現の始まりと終わりを示す記号。
[a-zA-Z]はアルファベットの小文字（aからz）および大文字（AからZ）を表している。
+: これは直前の文字クラス [a-zA-Z] が1回以上繰り返されることを示す量指定子。
*/
const alphabetsPatter = /[a-zA-z]+/;
const results = str.match(alphabetsPatter);
console.log(results.length);
// マッチした最初のインデックス
console.log(results.index);
console.log(results.input);

// 正規表現におけるgフラグは、マッチした全ての文字列を含む配列を返す。
const alphabetsPattern2 = /[a-zA-z]+/g;
const resultsWithG = str.match(alphabetsPattern2);
console.log(resultsWithG.length);
console.log(resultsWithG[0]);
console.log(resultsWithG[1]);
// indexとinputはgフラグの場合は追加されない
console.log(resultsWithG.index);

// 真偽値を取得
// testメソッドで文字列による検出を行う。
const str2 = "にわにはにわにはにわとりがいる";
// 先頭文字を検索。/~パターン/
console.log(/^にわ/.test(str2));
// 末尾文字を検索。/パターン$/
console.log(/にわ$/.test(str2));
// 文字を検索
console.log(/にわ/.test(str2));

// replaceメソッドによる文字列の置換
const newStr2 = str2.replace("にわ", "あほ");
console.log(newStr2);

// replaceメソッド+正規表現
// 最初に一致したものを検索
console.log(str2.replace(/にわ/, "あほ"));

// 繰り返し置換
console.log(str2.replace(/にわ/g, "あほ"));

// 全ての置換
// console.log(str2.replaceAll(/にわ/, "あほ"));

// タグ付きテンプレート関数
function tag(str) {
  console.log(str);
}

tag(`template ${0} literal ${1}`);
