const array = ["a", "b"];
array.forEach(function (element, i) {
  console.log(element);
});

array.forEach(function (element, i) {
  console.log(element + i);
});

// 配列かどうか
console.log(Array.isArray(array));
