// function addTax(price: number) {
//   const tax: number = 10;
//   return Math.round(price * (1 + tax / 100));
// }

// var addTax = function (price: number) {
//   const tax: number = 10;
//   return Math.round(price * (1 + tax / 100));
// };

// 指定してもしなくてもいいパラメータには?をつけるのが可能
let addTax = (price: number, tax?: number): number => {
  if (tax === undefined) {
    tax = 10;
  }
  return Math.round(price * (1 + tax / 100));
};
console.log(addTax(521, 10));
console.log(addTax(521, 8));
console.log(addTax(521));
