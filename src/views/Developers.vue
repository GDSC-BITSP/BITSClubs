<template>
  <v-app>
    <v-main>

      <div class="bg-color">
        <div class="post-title mx-auto">Frontend Developers</div>

        <v-row class="d-flex justify-space-around">
          <v-col class="mb-15" cols="3" v-for="dev in data[0]" :key="dev.no">
            <Card :imgName="dev.img" :name="dev.name" :post="dev.post" :linkedinurl="dev.linkedin" :githuburl="dev.github" />
          </v-col>
        </v-row>

        <div class="post-title mx-auto mb-6">Backend Developers</div>

        <v-row class="d-flex justify-space-around">
          <v-col class="mb-6" cols="3" v-for="dev in data[1]" :key="dev.no">
            <Card :imgName="dev.img" :name="dev.name" :post="dev.post" :linkedinurl="dev.linkedin" :githuburl="dev.github" />
          </v-col>
        </v-row>

        <div class="post-title mx-auto">Creative Team</div>

        <v-row class="d-flex justify-space-around">
          <v-col class="mb-6" cols="3" v-for="dev in data[2]" :key="dev.no">
            <Card :imgName="dev.img" :name="dev.name" :post="dev.post" :linkedinurl="dev.linkedin" :githuburl="dev.github" />
          </v-col>
        </v-row>

      </div>

      <Footer />

    </v-main>
  </v-app>
</template>

<script>
import Card from '../components/Card.vue';
import Footer from '../components/Footer.vue';
import Fdetails from '../components/Fdetails.json'
import Bdetails from '../components/Bdetails.json'
import Cdetails from '../components/Cdetails.json'


export default {
  name: 'Developers',

  components: {
    Card,
    Footer
  },
  data() {
    return {
      data: [Fdetails, Bdetails, Cdetails]
    };
  },
};
</script>

<style>
.bg-color {
  background-color: #171717;
  padding-bottom: 100px;
}

.post-title {
  padding: 96px;
  text-align: center;

  font-family: "Google Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  /* identical to box height, or 117% */

  color: #FFFFFF;
}
</style>