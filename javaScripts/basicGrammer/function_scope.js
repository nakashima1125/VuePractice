// スコープの範囲の確認
{
  const x = "outer";
  {
    const x = "inner";
    console.log(x);
  }
  console.log(x);
}

// グローバル変数の影響を最小にするには関数内で扱うなどがいい。
const measuretask = (taskFn) => {
  const startTime = Date.now();
  taskFn();
  const endTime = Date.now();
  console.log(`実行時間は${endTime - startTime}ミリ秒`);
};

function doHeavyTask() {
  // 計測したい処理
}
console.log(measuretask(doHeavyTask));

// varの特殊な動き。varの変数宣言は暗黙的に最も近い関数または先頭に巻き上げられ、代入部分はそのまま残る。
console.log(x); //errorではなく、undefiendとなる。
var x;

// 関数宣言もvarと同じく最も近い関数またはグローバルスコープに巻き上げられる。
console.log(hello()); //関数の定義が下記にあっても実行できる。
function hello() {
  return "hello";
}

// 即時実行関数：無名関数を宣言した直後に呼び出すことで、任意の処理を関数のスコープに閉じて実行できます。
(function () {
  var foo = "foo";
  console.log(foo);
})();

// クロージャ
const createCounter = () => {
  let count = 0;
  return function increment() {
    // 変数`count`を参照し続けている
    count = count + 1;
    return count;
  };
};
const countUp = createCounter();
const newCountUp = createCounter();

// 参照している関数(オブジェクト)は別であるため===は一致しない
console.log(countUp === newCountUp); // false

console.log(countUp());
console.log(countUp()); //ガベージコレクションされていないので値が増える。
// それぞれの状態も別となる
console.log(newCountUp());
