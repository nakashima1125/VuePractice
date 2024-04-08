<script setup>
import { defineProps, defineEmits } from "vue";

defineProps(["todos"]);

const emit = defineEmits(["removeTodo"]);
const clickRemove = (i) => emit("removeTodo", i);
</script>

<template>
  <ul v-if="todos.length > 0">
    <li class="task" v-for="(todo, i) in todos" v-bind:key="i">
      {{ todo }}
      <button type="button" v-on:click="clickRemove(i)">削除</button>
    </li>
  </ul>
  <p v-else>* Todoを追加して下さい</p>
</template>

<style>
.task {
  margin: 20px;
  width: auto; /*backgroundの範囲 */
  height: auto;

  background-color: #f0f8ff;
}
</style>
