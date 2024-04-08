// https://qiita.com/tamfoi/items/bd1def3041ac04500e52

let tf = require("@tensorflow/tfjs-node");

// 学習データを用意
let randomData = [];
for (let i = 0; i <= 100; i++) {
  randomData[i] = Math.random();
}

let xData = tf.tensor1d(randomData);
let yData = tf.add(tf.mul(xData, tf.scalar(0.1)), tf.scalar(0.3));

console.log(xData);
xData.print();
console.log(yData);
yData.print();

let W = tf.variable(tf.zeros([1]));
let b = tf.variable(tf.zeros([1]));
//y = W * x + b

let y = (x: any) => tf.add(tf.mul(W, x), b);

// let loss = (y, yd) => y.sub(yd).square().mean();
// let optimizer = tf.train.sgd(0.5);

// for (let i = 0; i <= 200; i++) {
//   optimizer.minimize(() => loss(y(xData), yData));
//   if (i % 20 == 0) {
//     console.log(`step: ${i}, W: ${W.dataSync()}, b: ${b.dataSync()}`);
//   }
// }
