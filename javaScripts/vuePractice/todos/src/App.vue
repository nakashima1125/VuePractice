<script setup>
import AppHeader from "./components/AppHeader.vue";
import todoList from "./components/todoList.vue";
import { ref } from "vue";

const newTodo = ref("");
const todos = ref([]);

const addTodo = () => {
  todos.value.push(newTodo.value);
  newTodo.value = "";
};

const removeTodo = (index) => {
  todos.value.splice(index, 1);
};
</script>

<template>
  <AppHeader color="blue">MyTodo</AppHeader>
  <input type="text" size="30" v-model="newTodo" />
  <button v-on:click="addTodo()">追加</button>

  <todoList v-bind:todos="todos" @removeTodo="removeTodo" />
</template>
