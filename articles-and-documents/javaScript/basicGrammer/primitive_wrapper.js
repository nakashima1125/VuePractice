// プリミティブ型でもメソッドを呼び出せる。
console.log("string".toUpperCase());

// プリミティブ型の値を包み込んだ（ラップした）オブジェクトをインスタンス化
// stirngのインスタンスメソッドであるtoUpperCaseを呼び出せる。
const str2 = new String("input");
console.log(str2.toUpperCase());

// プリミティブ型からラッパー型への自動変換
console.log(new String(str2).toUpperCase);
