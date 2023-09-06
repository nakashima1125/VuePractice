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
console.log(test1.indexOf(2));
