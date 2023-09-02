// Vue.jsで扱うデータを用意する
/* 
myDataという名前の変数を宣言する。
myData変数にオブジェクトを代入する。ここで、オブジェクトのプロパティとしてappNameを持っている。
appNameプロパティの値は文字列 "Hello Vue.js!!" 。
*/

const data = {
  appName:"I am Hero"
}

// Vue.jsの準備をする
const app = Vue.createApp({
	data(){
		return myData;
	},
	created(){
		console.log("created!!");
	}
});

app.mount("#app");// 3, Vue.jsを起動する
