// const tf = require("@tensorflow/tfjs-node-gpu");
const tf = require("@tensorflow/tfjs-node");
// const tf = require("@tensorflow/tfjs");
const a = tf.tensor([
  [1, 2],
  [3, 4],
]);

console.log("shape:", a.shape);
a.print();

// Or you can create a tensor from a flat array and specify a shape.
const shape = [2, 2];
const b = tf.tensor([1, 2, 3, 4], shape);
console.log("shape:", b.shape);
b.print();

let c = tf.matMul(a, b);
console.log("c");
c.print();
