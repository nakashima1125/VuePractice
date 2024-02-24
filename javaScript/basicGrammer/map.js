// 作成されたマップは何も持っていないので0を出力する。
const map1 = new Map();
const map2 = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
console.log(map1.size);
console.log(map2.size);

// mapはgetで取り出し、setで追加する。deleteで削除する
map1.set("key", "value");
console.log(map1.get("key"));
map1.delete("key1");
console.log(map1.size);

// マップが持つ要素を列挙するメソッドとして、forEach、keys、values、entriesがある。
const result = [];
map2.forEach((value, key) => {
  result.push(`{key}:${value}`);
});
console.log(result);

const keys = [];
for (const key of map2.keys()) {
  keys.push(key);
}
console.log(keys);

// mapを使って商品のオブジェクトと注文数をマッピングできる
class ShoppingCart {
  constructor() {
    // mapを定義
    this.item = new Map();
  }

  addItem(item) {
    // itemがない場合はundefinedを返すので、それを回避し初期値として0を代入する。
    const count = this.item.get(item) ?? 0;
    // mapに対するセット
    this.item.set(item, count + 1);
  }

  // カート内の合計金額を返す
  getTotalkPrice() {
    return Array.from(this.item).reduce((total, [item, count]) => {
      return total + item.price * count;
    }, 0);
  }

  toString() {
    return Array.from(this.items)
      .map(([item, count]) => {
        return `${item.name}:${count}`;
      })
      .join(",");
  }
}

const shoppingCart = new ShoppingCart();
// 商品一覧
const shopItem = [
  { name: "みかん", price: 100 },
  { name: "りんご", price: 200 },
];

shoppingCart.addItem(shopItem[0]);
shoppingCart.addItem(shopItem[0]);
shoppingCart.addItem(shopItem[1]);

console.log(shoppingCart.getTotalkPrice());

// weakmap : 弱い参照をしてGCされないもの。メモリリークを防ぐ役割を持つ。
const map = new WeakMap();

let obj = {};
map.set(obj, "value");

// GCが発生されるタイミングでWeakMapから値が破棄される。
obj = null;

//set :セット型のビルトインオブジェクトで重複する値がないことを保証したコレクションのこと
const set = new Set();
console.log(set.size);

const set2 = new Set(["value1", "value2", "value2"]);
// 重複する値は数えない
console.log(set2.size);
set2.delete("value1");
console.log(set2.size);
