function fn(number) {
  return number * 5;
}
const fnArrow = (number) => {
  number * 20;
};

const fnArrow2 = (number) => ({
  result: number * 5,
});

console.log(fnArrow2(10));
console.log(fnArrow(10));
console.log(fn(10));
