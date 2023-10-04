<script setup>
import draggable from "vuedraggable";
import { ref } from "vue";

// refがないとドロップ後に元の場所へ戻る。
const todos = ref([
  {
    id: 1,
    name: "キャベツ",
    content: "テスト1",
    categoryNo: "1",
  },
  {
    id: 2,
    name: "赤い",
    content: "テスト2",
    categoryNo: "2",
  },
  {
    id: 3,
    name: "wswsw",
    content: "テスト3",
    categoryNo: "3",
  },
]);

const dragIndex = ref("");
const saveIndex = (index) => {
  console.log("dragStart", index);
  dragIndex.value = index;
};
</script>

<template>
  <div id="app">
    <draggable v-model="todos" group="people" :key="id" tag="ul">
      <template #item="{ element, index }">
        <div class="drag-item" @dragstart="saveIndex(index)">
          <li class="handle">{{ element.name }}</li>
        </div>
      </template>
    </draggable>
  </div>
</template>

<style scoped>
.drag-item {
  background: rgb(233, 249, 255);
  margin: 10px;
  width: 500px;
}
li {
  cursor: pointer;
  padding: 10px;
  border: solid #ddd 1px;
}
ul {
  list-style-type: none;
}
</style>
