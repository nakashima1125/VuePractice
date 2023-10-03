<script setup>
import draggable from "vuedraggable";

const data = [
  {
    id: 1,
    name: "キャベツ",
    content: "テスト1",
    categoryMo: "1",
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
    categoryMo: "3",
  },
];
</script>

<template>
  <div>
    <!-- .handle クラスが指定された要素は、その部分をクリックして要素をドラッグできるハンドルとして機能する -->
    <draggable v-model="data" group="people" item-key="id" handle=".handle">
      <template #item="{ element }">
        <div class="drag-item">
          <li class="handle">
            ここを押せば動かせます。 {{ element.id }}-{{ element.content }}
          </li>
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
