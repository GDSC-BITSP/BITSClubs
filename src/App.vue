<template>
  <div class="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
@font-face {
  font-family: "Google-Sans";
  src: local("Google-Sans"),
    url(./assets/GoogleSans-22Jan2018-v1_27/GoogleSansDisplay-Regular-v1.27.ttf)
      format("truetype");
  font-weight: normal;
  font-style: normal;
}

body {
  margin: 0px;
  padding: 0px;
  font-family: Google-Sans, sans-serif;
  text-align: center;
  background: #1e1f1e;
}

.modal-override {
  background-color: #202020 !important;
  color: white;
}

@media (max-width: 768px) {
  .modal-override {
    left: 5% !important;
    width: 90% !important;
  }
}
</style>
