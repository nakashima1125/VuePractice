const h1Elemnt = document.querySelector("h1");
console.log(h1Elemnt);
console.dir(h1Elemnt);
console.log(h1Elemnt.textContent);
h1Elemnt.textContent = "変更後のタイトル";
const btn1 = document.querySelector("button");

btn1.addEventListener("click", (e) => {
  console.log(e.target);
  console.log("hello");
});
