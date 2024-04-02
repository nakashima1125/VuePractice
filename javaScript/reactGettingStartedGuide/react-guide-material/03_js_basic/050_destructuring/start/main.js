// const arry = ["配列1", "配列2", "配列3"];
// const [a, , c] = ["配列1", "配列2", "配列3"];
// console.log(a);
// console.log(c);

// const obj = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
// const { x, z } = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
// console.log(obj.x);
// console.log(x);
// console.log(z);

const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };
const fnArr = ([country, prefecture, city]) => {
  console.log("---配列---");
  console.log(`country: ${country}`);
  console.log(`state: ${prefecture}`);
  console.log(`city: ${city}`);
  // const fnArr = (arry) => {
  // console.log(`country: ${arry[0]}`);
  // console.log(`state: ${arry[1]}`);
  // console.log(`city: ${arry[2]}`);
};

const fnObj = ({ country, state, city }) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`city: ${city}`);
  // const fnObj = (objAddr) => {
  // console.log(`country: ${objAddr.country}`);
  // console.log(`state: ${objAddr.state}`);
  // console.log(`city: ${objAddr.city}`);
};

fnArr(arr);
fnObj(objAddress);
