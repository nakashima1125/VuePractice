// 外部のjson読み込みオブジェクト
let xhr = new XMLHttpRequest();
xhr.open("GET", "zip.json", true);

// statusはstausコード。200は正常という意味
// readyState：https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest/readyState
xhr.onload = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.response);
  }
};

// リクエストを送信。送信するタイミングは処理が完全に終了したタイミングで、onloadで終わったことを認識できるようにしている。
xhr.send(null);
