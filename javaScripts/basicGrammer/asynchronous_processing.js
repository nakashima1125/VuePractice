// setTimeout関数：任意の秒数後に実行するタイマー
function taskA() {
  console.log("タスクAを実行 at" + Date.now());
}

function taskB() {
  console.log("タスクBを実行 at" + Date.now());
}

function taskC() {
  console.log("非同期のタスクを実行 at" + Date.now());
}

taskA();
setTimeout(() => {
  taskC();
}, 1000);
taskB();

// promiseインスタンス
const promise = new Promise((resolve, reject) => {
  // 非同期に成功したらresolveを呼ぶ。
  // 非同期に失敗したらrejectを飛ぶ。
});

const onFulfiiled = () => {
  console.log("resolveされた");
};

const onRejected = () => {
  console.log("rejectされた");
};
// thenメソッドで成功時と失敗時に呼ばれるコールバック関数を登録。
promise.then(onFulfiiled, onRejected);

function delay(timeoutMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeoutMs);
  });
}
// thenメソッドで成功したときのコールバック関数だけを登録
delay(10).then(() => {
  console.log("hellooo");
});

function errorPromise(message) {
  return new Promise((resolve, reject) => {
    reject(new Error(message));
  });
}
errorPromise("catchエラーハンドリング").catch((error) => {
  console.log(error.message);
});

// promiseは例外が発生すると自動でキャッチしrejectを呼ぶ。
function throwPromise() {
  return new Promise((resolve, reject) => {
    // Promiseコンストラクタの中で例外は自動的にキャッチされrejectを呼ぶ
    throw new Error("例外が発生したで");
    // 例外が発生すると、これ以降のコンストラクタの処理は実行されません
  });
}

throwPromise().catch((error) => {
  console.log(error.message); // => "例外が発生"
});
