// プロパティを持たないオブジェクト
const obj = {};

// プロパティを持つオブジェクト
const obj2 = {
  key: "value",
  key2: "valiue2",
};

console.log(obj2);
console.log(obj2.key2);
console.log(obj2.key);

// オブジェクトの分割代入
const languages = {
  ja: "日本語",
  en: "英語",
};
const { ja, en } = languages;
console.log(ja);

// キーの追加
obj.key = "add_value";
obj.key2 = "add_value2";
console.log(obj);

// プロパティの削除
delete obj.key2;
console.log(obj);

// constで定義したオブジェクトは変更できる
obj.key = "上書き";
console.log(obj);

// プロパティの存在確認
if (obj.key !== undefined) {
  console.log("ちゃんとプロパティは存在している");
}
if ("key" in obj) {
  console.log("オブジェクトのプロパティは存在する");
}

console.log(Object.hasOwn(obj, "key"));
console.log(obj.hasOwnProperty("key"));

// プロパティのネスト
const obj3 = {
  a: {
    b: "objのaのプロパティのbのプロパティ",
  },
};
console.log(obj3?.a?.b);
console.log(obj3.a.b);

// toStringメソッド
const obj4 = { key: "value" };
console.log(obj4.toString());
console.log(String(obj4));

// オブジェクトのプロパティは文字列化される
// オブジェクトを文字列化すると"[object Object]"という文字列になる。
const obj5 = {};
const keyObjec1 = { a: 1 };
const keyObjec2 = { a: 2 };

obj5[keyObjec1] = "1";
obj5[keyObjec2] = "2";
console.log(obj5);
