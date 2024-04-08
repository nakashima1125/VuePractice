// const nums = [3, 1, 4, 1, 5, 10, 2, 6];

// const result1 = Math.max(3, 1, 4, 1, 5, 10, 2, 6);
// const result2 = Math.max(...nums);
// let ary1 = [...nums];
// console.log(result1);
// console.log(result1);
// console.log(ary1);
// ary2 = nums;
// console.log(nums === ary2, nums === ary1);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let newArr = [...arr1, 1000, ...arr2];
// console.log(newArr);

// const obj = {
//   name: "Tom",
//   age: 22,
// };
// const newObj = { ...obj };
// newObj.name = "Tim";
// console.log(obj);
// console.log(newObj);

// 残余引数の記述は配列になる。
// const restA = (...argA) => console.log(argA);
// restA(1, 3, 4);

const restB = (n, ...argB) => console.log(argB, n);
restB(1, 3, 4);
