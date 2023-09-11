<template>
  <div>
    <header>
      <h1>About me</h1>
    </header>

    <nav>
      <router-link to="/selfie" class="button-link">Me</router-link>
      <router-link to="/high-school-photo" class="button-link">School photo</router-link>
      <router-link to="/story" class="button-link">My story</router-link>
      <router-link to="/repository" class="button-link">Repository</router-link>
      <router-link to="/lesson" class="button-link">Css Feature Lesson</router-link>
      <router-link to="/jsActivity" class="button-link">JS Activity</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
}

header {
  background-color: #333;
  color: white;
  padding: 10px;
}

nav {
  background-color: #808080;
  padding: 20px;
}

.button-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #808080;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.button-link:hover {
  background-color: #A9A9A9;
}

</style>