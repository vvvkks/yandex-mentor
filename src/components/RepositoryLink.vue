<template>
  <div>
    <h1>Repository</h1>
    <p>Вы можете найти исходный код этого приложения на GitHub:</p>
    <a class="github-link" href="https://github.com/vvvkks/yandex-mentor" target="_blank">Исходный код</a>
  </div>
</template>

<style scoped>
h1 {
  font-size: 30px;
  color: #333;
  margin-left: 10px;
  margin-top: 20px;
}

p {
  font-size: 18px;
  color: #555;
  margin-left: 10px;
}

.github-link {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin-left: 10px;
}

.github-link:hover {
  background-color: #555;
}
</style>