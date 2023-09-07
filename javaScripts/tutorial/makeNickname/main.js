
const mydata = {
  appName: "ニックネームメーカ", //アプリ名
  nickname: "ニックネーム",
  name: [
    "岡田",
    "今岡",
    "中田",
    "小宮",
    "笹技",
    "黒柳",
    "今泉",
  ]
}

const app = Vue.createApp({
  data() {
		return mydata;
  },
  // Vueアプリケーションが作成された直後に呼び出される関数を指定。
	created(){
    console.log("created!!");
    this.rouletter();

  },
  // Vue.jsで使う関数は、全て"methods"の中に記述する。
  methods: {
    rouletter() {
      console.log("rouletter!!");
      let rdm = Math.random() * this.name.length; //乱数と配列の長さを掛け算
      let index = Math.floor(rdm); // 整数に変換
      this.nickname = this.name[index];
    }
  }
}
);

/*
.mount("#app") は、Vue アプリケーションをHTMLドキュメント内の特定の要素に取り付けるためのメソッドです。
#appは要素のセレクタで、通常はHTML内の要素のIDを指定します。
*/
app.mount("#app");
