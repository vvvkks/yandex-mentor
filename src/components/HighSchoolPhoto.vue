<script setup>
const componentName = 'HighSchoolPhoto';
</script>

<template>
  <div class="photo-container">
    <h1>My High School photo</h1>
    <img src="../assets/img/high-school-photo.jpg" alt="High School photo">
    <p class="photo-description">
      Моё обучение проходило в физико-математическом классе. Выпустилась из школы я в 2021 году.
    </p>
  </div>
</template>

<style scoped>
.photo-container {
  text-align: center;
}

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  margin-top: 10px;
}

p.photo-description {
  font-size: 18px;
  color: #777;
  margin-top: 10px;
}

img {
  position: relative;
  max-width: 100%;
  height: 400px;
  border: 2px solid #333;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 5px;
  transition: transform 0.3s ease-in-out;
  display: block;
  margin: 0 auto;
}

img:hover {
  border-color: #FF1493;
  transform: scale(1.05);
}
</style>
