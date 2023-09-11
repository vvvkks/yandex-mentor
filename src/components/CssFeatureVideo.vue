<template>
  <h1>Sprite Animation CSS lesson</h1>
  <div class="info-trigger">
    <span>&#9432;</span>
    <div class="info">
      <p><b> align-items: </b> center; - центрирование элементов вертикально;<br>
        <b> display: </b> flex; - гибкий макет CSS;<br>
        <b> left:</b> 0 - элемент будет прижат к левому краю своего родительского элемента;<br>
        <b>@keyframes</b> - определение конкретных состояний элемента в разные моменты времени.
      </p>
    </div>
  </div>
  <div class="video-container">
    <video src="@/assets/video/css-tutor.mp4" controls></video>
  </div>
</template>

<style scoped>
.video-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
video {
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 5px #888;
}
h1 {
  margin-left: 5px;
  margin-top: 10px;
}
.info-trigger {
  position: absolute;
  top: 150px;
  right: 0;
  margin: 20px;
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 15px;
  cursor: pointer;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
}


.info {
  display: none;
  position: absolute;
  top: 100%;
  right: 100%;
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.info-trigger span {
  display: inline-block;
}

.info-trigger:hover .info {
  display: block;
}
</style>
<script setup>
</script>