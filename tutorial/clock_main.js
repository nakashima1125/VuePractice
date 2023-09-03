/* 
myDataという名前の変数を宣言する。
myData変数にオブジェクトを代入する。ここで、オブジェクトのプロパティとしてappNameを持っている。
appNameプロパティの値は文字列 "Hello Vue.js!!" 。
*/

const mydata = {
  appName: "Myclock", //アプリ名
  clock:"00:00:00"
}

// Vue.createAppメソッドを使用して、Vueアプリケーションを作成し、それを変数appに格納
const app = Vue.createApp({
	// Vueアプリケーションのデータを定義。data関数内で、mydataというデータオブジェクトを返すことで、アプリケーションのデータを初期化している。
  data() {
		return mydata;
  },
  // Vueアプリケーションが作成された直後に呼び出される関数を指定。
	created(){
    console.log("created!!");
    // tick関数の実行
    this.tick();
  },
  // Vue.jsで使う関数は、全て"methods"の中に記述する。
  method: {
    // 現在時刻を取得するメソッド
    tick() { 
      console.log("tick");

      const date = new Date(); //dateオブジェクトの作成
      let h = date.getHours(); //0~23までの数値
      let m = date.getMinutes();
      let s = date.getSeconds();
  
      if (h < 10) { h = '0' + h };//10未満なら頭に0をつける
      if (m < 10) { m = "0" + m };
      if (s < 10) { s = "0" + s };
      this.clock = h + ":" + m + ":" + s;
/*
setTimeout関数を使用して、一定の時間経過後に指定された関数を実行。
100ミリ秒後に this.tick() という関数を呼び出す。 
*/
      setTimeout(() => {
        this.tick();
      },100)
    }    
  }
});

/*
.mount("#app") は、Vue アプリケーションをHTMLドキュメント内の特定の要素に取り付けるためのメソッドです。
#appは要素のセレクタで、通常はHTML内の要素のIDを指定します。
*/
app.mount("#app");
