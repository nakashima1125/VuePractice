// strictモードにして、一部のエラーや不適切なコードの使用を防ぐ
(() => {
  "use strict";

  // vueのコンストラクタを使用してvueのインスタンスを作成
  let vm = new Vue({
    // el: "#result": Vueインスタンスのelオプション。
    // VueアプリケーションがマウントされるHTML要素を指定します。
    el: "#result",

    //  Vueインスタンスのデータオブジェクトを定義。
    // Vueアプリケーション内で使用されるデータプロパティが含まれる。
    data: {
      // 「newList」はテキストボックスに入力した値を受ける
      newList: "",
      lists: [],
    },

    // ブラウザのLocalStorageにJSON形式で保存
    watch: {
      lists: {
        handler: function () {
          // dataの「lists」は「this.lists」で取得
          localStorage.setItem("lists", JSON.stringify(this.lists));
        },
        deep: true,
      },
    },
    // ブラウザのLocalStorageから出力
    mounted: function () {
      this.lists = JSON.parse(localStorage.getItem("lists")) || [];
    },

    // イベント時の動作
    methods: {
      addList: function () {
        let item = {
          title: this.newList,
        };
        this.lists.push(item); //itemをlistへ追加
        this.newList = ""; //追加が終われば空にする。
      },
      delList: function (index) {
        // 確認ダイアログを表示し、ユーザーが削除を確認した場合のみ実行
        if (confirm("削除しますか？")) {
          // index から始まる1つの要素を削除
          this.lists.splice(index, 1);
        }
      },
      allDel: function () {
        if (confirm("一括削除しますか？")) {
          this.lists = this.listCount;
        }
      },
    },
    // 動的に算出
    // filter メソッドを使用し,this.filterからisCheckedがfalseになる要素だけ返す。
    computed: {
      listCount: function () {
        return this.lists.filter(function (list) {
          // isCheckedはHTMLのチェックボックスでcheckされたらTrueを返す
          return !list.isChecked;
        });
      },
    },
  });
})();
