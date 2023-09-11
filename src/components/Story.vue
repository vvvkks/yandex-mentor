<script setup>
import { text } from "../assets/story/story.json"
const componentName = "Story"
const formattedText = text.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('');
</script>

<template>
  <div>
    <h1>My story</h1>
    <div v-html="formattedText"></div>
  </div>
</template>

<style scoped>
p {
  font-size: 18px;
  line-height: 1.5;
  color: #333;
  text-align: justify;
}
h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}
div {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>