// 配列中に隙間がある（疎な配列）
const sparseArray = [1, , 2];
console.log(sparseArray.length);
console.log(sparseArray[4]);

// 要素のアクセス
console.log(sparseArray.at(0));
console.log(sparseArray.at(-1));
console.log(sparseArray[-1]);

// 配列かどうかの確認
console.log(Array.isArray(sparseArray));

// 固定長で型付きの配列を作成。isArrayではfalseが来るので別物の配列と考えていい。
const typeArray = new Int8Array(8);
console.log(Array.isArray(typeArray));

// 要素が存在するかの確認
const test1 = [1, 2, 3];
console.log(Object.hasOwn(test1, 2));

// インデックスの取得
const records = [
  { date: "2020/12/1", count: 5 },
  { date: "2020/12/2", count: 11 },
  { date: "2020/12/3", count: 9 },
  { date: "2020/12/4", count: 12 },
  { date: "2020/12/5", count: 3 },
];

// 10より大きい`count`プロパティを持つ最初のオブジェクトのインデックスを取得
const firstRecordIndex = records.findIndex((record) => {
  return record.count > 10;
});
// 10より大きい`count`プロパティを持つ最後のオブジェクトのインデックスを取得
const lastRecordIndex = records.findLastIndex((record) => {
  return record.count > 10;
});

// reduceメソッド
const ary2 = [1, 2, 3];
const totalValue = ary2.reduce((accumulator, currentValue, index, ary2) => {
  return accumulator + currentValue;
}, 0);
console.log(totalValue);
