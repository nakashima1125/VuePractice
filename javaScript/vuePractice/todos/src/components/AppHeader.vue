<script setup>
import { defineProps } from "vue";
defineProps(["color"]);
</script>

<template>
  <header>
    <h1 v-bind:style="{ color: color }"><slot>No title</slot></h1>
  </header>
</template>
