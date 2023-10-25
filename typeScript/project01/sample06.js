"use strict";
// 外部のjson読み込みオブジェクト
let xhr = new XMLHttpRequest();
xhr.open("GET", "zip.json", true);
console.log(xhr.readyState);
xhr.onload = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response);
    }
};
xhr.send(null);
