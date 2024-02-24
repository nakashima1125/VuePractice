const a = { a: "a" };
const b = { b: "b" };

const c1 = { ...a, ...b };
const c2 = Object.assign({}, a, b);

console.log(c1);
console.log(c2);
