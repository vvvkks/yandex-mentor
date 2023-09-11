<template>
  <div class="container">
    <div class="col-md-4">
      <div class="card custom-card">
        <img src="../assets/img/meetup.jpg" alt="Meetup" class="card-img-top custom-img" style="width: 400px; height: 500px;">
        <div class="card-body custom-text">
          <p class="card-text">Я часто посещаю различные митапы по разработке</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card custom-card">
        <img src="../assets/img/last-selfie.jpg" alt="Last selfie" class="card-img-top custom-img" style="width: 400px; height: 500px;">
        <div class="card-body">
          <h2 class="card-title custom-title">My last selfie</h2>
          <p class="card-text custom-text">Всем привет! Меня зовут Вика и сейчас мне 20 лет, я занимаюсь frontend разработкой и учусь в ИТМО!</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card custom-card">
        <img src="../assets/img/friends.jpg" alt="Friends" class="card-img-top custom-img" style="width: 400px; height: 500px;">
        <div class="card-body">
          <p class="card-text custom-text">У меня очень много друзей, с которыми я познакомилась во время учебы, мы часто встречаемся и классно проводим время вместе</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
.custom-card {
  position: relative;
  height: 550px;
  width: 400px;
  text-align: center;
  display: block;
  margin: 20px auto 0;
  max-width: 100%;
  border: 2px solid #333;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: border-color 0.3s;
}
.custom-card:hover {
  border-color: #FF1493;
  transform: scale(1.05);
}
.custom-img {
  max-width: 100%;
  height: auto;
}
.custom-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}
.custom-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
}
.custom-card:hover .custom-text {
  opacity: 1;
}
</style>
