<template>
  <div class="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    components: {
      Navbar
    }
  }

</script>

<style>
  /* @font-face {
    font-family: "Airbnb Cereal App";
    src: local("Airbnb Cereal App"), url(../public/fonts/AirbnbCereal-Medium.ttf) format("truetype");
    font-weight: medium;
  }

  @font-face {
    font-family: "Airbnb Cereal App";
    src: local("Airbnb Cereal App"), url(../public/fonts/AirbnbCereal-Medium.ttf) format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: "Airbnb Cereal App";
    src: local("Airbnb Cereal App"), url(../public/fonts/AirbnbCereal-Medium.ttf) format("truetype");
    font-weight: 500;
  }

  @font-face {
    font-family: "Airbnb Cereal App";
    src: local("Airbnb Cereal App"), url(../public/fonts/AirbnbCereal-Bold.ttf) format("truetype");
    font-weight: bold;

  }
  @font-face {
    font-family: "Airbnb Cereal App";
    src: local("Airbnb Cereal App"), url(../public/fonts/AirbnbCereal-Bold.ttf) format("truetype");
    font-weight: 800;
  }

  @font-face {
    font-family: "Airbnb Cereal App";
    src: local("Airbnb Cereal App"), url(../public/fonts/AirbnbCereal-Book.ttf) format("truetype");
    font-weight: normal;
  } */
  @font-face {
    font-family: Google Sans;
    src: url("../src/assets/GoogleSans-22Jan2018-v1_27/GoogleSans-Medium-v1.27.ttf");
  }

  body {
    margin: 0px;
    padding: 0px;
    font-family: Google Sans, sans-serif;
    text-align: center;
    background: #1E1F1E;
  }
 .modal-override {
   background-color:#202020 !important;
   color: white;
 }

 @media (max-width:768px) {
    .modal-override {
  left:5% !important;
  width:90% !important
 }
 }
</style>
