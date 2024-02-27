// https://typescriptbook.jp/reference/values-types-variables/type-alias

/*
型エイリアスを宣言するにはtypeキーワードを用いる。
型エイリアスとはある型につけた短い別名のことをいう。
*/

type StringOrNumber = string | number;
const value: StringOrNumber = 10;
