<script setup>
import {ref, computed} from 'vue'
// const answer = computed(()=>{
//   return 1 + 5
// })

const message = computed(() =>{
  return 'welcome <strong>'+ myName.value +'</strong>'})


const welcomeColor = 'red'
const myName = ref('')
</script>

<template>
  <h1>vue3</h1>
  <p>お名前は？ : <input type="text" size="30" v-model="myName"></p>
  <p v-html="message" :style="{'background-color':welcomeColor, 'color':'white'}"></p>
</template>

