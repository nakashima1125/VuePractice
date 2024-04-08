// アプリケーションでJSONを扱うのは、外部のプログラムとデータを交換する用途がほとんど

const json = '{"id":1, "name":"js-primer", "bio":null}';

// jsonへ変換
const obj = JSON.parse(json);

console.log(obj);
console.log(obj.name);

const replacer = (key, value) => {
  if (value === null) {
    return undefined;
  }
  return value;
};
// stringifyの第２引数に関数を渡すことで返り値でnullかどうかのコントロール判定ができる。
console.log(JSON.stringify(obj, replacer));

// 第３引数はspace引数と呼ばれ、変換後のjsonファイルを読みやすくするインデントを設定できます。
// 引数を使わない場合はnullを使う。
// スペース2個でインデント
console.log(JSON.stringify(obj, null, 2));
// タブでインデント
console.log(JSON.stringify(obj, null, "\t"));
