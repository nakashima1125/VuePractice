function fn(fnArrow) {
  const result = fnArrow(10);
  console.log(result);
}

// console.log(fn(2));
// console.log(fn(4));

const fnArrow = (number = 3) => {
  return number * 2;
};

const fnArrowObj = (number) => ({ result: number * 2 });

console.log(fnArrowObj(2));
debugger;
console.log(fn(fnArrow));
