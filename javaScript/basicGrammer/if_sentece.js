const version = "ES6";

if (version === "ES5") {
  console.log("ECMAScripts 5");
} else if (version === "ES6") {
  console.log("ECMASCripts 2015");
} else {
  console.log("わかりません");
}

// switch文
switch (version) {
  case "ES1":
    console.log("ECMAScripts 1");
    break;
  case "ES2":
    console.log("EXCMAScripts 2");
    break;
  default:
    console.log("しらないバージョン");
    break;
}

