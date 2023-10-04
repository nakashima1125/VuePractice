<script setup>
import draggable from "vuedraggable";
import { ref } from "vue";

// refがないとドロップ後に元の場所へ戻る。
const todos = ref([
  {
    name: "キャベツ",
    content: "テスト1",
    categoryNo: "1",
  },
  {
    name: "赤い",
    content: "テスト2",
    categoryNo: "1",
  },
  {
    name: "wswsw",
    content: "テスト3",
    categoryNo: "1",
  },
]);

const todos2 = ref([
  {
    name: "キャベツ",
    content: "テスト1",
    categoryNo: "2",
  },
  {
    name: "赤い",
    content: "テスト2",
    categoryNo: "2",
  },
  {
    name: "wswsw",
    content: "テスト3",
    categoryNo: "2",
  },
]);

const dragIndex = ref("");
const saveIndex = (index) => {
  console.log("dragStart", index);
  dragIndex.value = index;
};
</script>

<template>
  <div class="flex">
    <div class="col3">
      <span class="tag">候補</span>
      <draggable v-model="todos" group="people" :key="id" tag="ul">
        <template #item="{ element, index }">
          <div class="drag-item" @dragstart="saveIndex(index)">
            <li class="handle">{{ element.name }}</li>
          </div>
        </template>
      </draggable>
    </div>

    <div class="col2">
      <span class="tag">処理中</span>
      <draggable v-model="todos2" group="people" :key="id" tag="ul">
        <template #item="{ element, index }">
          <div class="drag-item" @dragstart="saveIndex(index)">
            <li class="handle">{{ element.name }}</li>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<style scoped>
.drag-item {
  background: rgb(233, 249, 255);
  margin: 10px;
  width: 250px;
}
li {
  cursor: pointer;
  padding: 10px;
  border: solid #ddd 1px;
}
ul {
  list-style-type: none;
}

.col3 {
  background: #f0f8ff;
  width: 500px;
}

.col2 {
  background: #ffffe0;
  width: 500px;
}
.flex {
  display: flex;
  display: -webkit-flex;
}
</style>
