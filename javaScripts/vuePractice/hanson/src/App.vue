<script setup>
import draggable from "vuedraggable";

const data = [
  {
    id: 1,
    content: "テスト1",
  },
  {
    id: 2,
    content: "テスト2",
  },
  {
    id: 3,
    content: "テスト3",
  },
];
</script>

<template>
  <div class="hello">
    <draggable v-model="data" group="people" item-key="id" handle=".handle">
      <template #item="{ element }">
        <div class="drag-item">
          <span class="handle">ここを押せば動かせます。</span>
          {{ element.id }}
        </div>
      </template>
    </draggable>
  </div>
</template>

<style scoped>
.drag-item {
  background: rgb(233, 249, 255);
  margin: 10px 0;
}
</style>
