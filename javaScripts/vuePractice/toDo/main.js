// https://jp.vuejs.org/v2/examples/todomvc.html
var STORAGE_KEY = "todos-vuejs-demo";
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    todos.forEach(function (todo, index) {
      todo.id = index;
    });
    todoStorage.uid = todos.length;
    return todos;
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};

// Vueのインスタンスを作成：Vue.jsの機能を使用してアプリケーションのデータとUIを管理
const app = new Vue({
  el: "#app", // #はprivateフィールド
  data: {
    todos: [], //空の配列
  },
  method: {},
});
