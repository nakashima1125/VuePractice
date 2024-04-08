try {
  console.log("実行されます");
  undefinedFunction(); // errorが発生する
} catch (error) {
  // 例外が発生すれば、このブロックが実行される
  console.log("実行される");
  console.log(error instanceof ReferenceError);
  console.log(error);
} finally {
  // この部分は例外に関係なく実行
  console.log("必ず実行");
}

// throw文によりユーザが例外を投げることができる
try {
  throw new Error("例外が投げられました");
} catch (error) {
  console.log(error.message);
}

// 条件付きエラー
function test(num) {
  if (num < 0) {
    throw new Error(`${num}は0以下ですよ`);
  }
}

try {
  test(-1);
} catch (error) {
  console.log(error.message);
}
