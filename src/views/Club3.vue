<template>
  <div>
    <div class="listpage">
      <Sidebar />
      <div class="listpage2">
        <ul>
          <router-link to="/club" active-class="active" exact class="routerlink"
            ><li v-for="list in lists" :key="list.id">
              {{ list.name }}
            </li></router-link
          >
        </ul>
      </div>
    </div>

    <!-- MOBILE-VIEW -->

    <div class="mobile-listpage">
      <div class="mobile-listhead"><h1>Clubs</h1></div>
      <div class="mobile-listitems">
        <ul>
          <a
            ><li v-for="list in lists" :key="list.id">{{ list.name }}</li></a
          >
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
export default {
  name: "ClubList",
  components: {
    Sidebar,
  },
  data() {
    return {
      lists: [
        {
          id: 1,
          name: "GDSC",
        },
        {
          id: 2,
          name: "Gurukul",
        },
        {
          id: 3,
          name: "Coding Club",
        },
        {
          id: 4,
          name: "English Language Activities Society",
        },
        {
          id: 5,
          name: "Astro Club",
        },
        {
          id: 6,
          name: "BITS Embryo",
        },
        {
          id: 7,
          name: "Dance Club",
        },
        {
          id: 8,
          name: "Debating Society",
        },
        {
          id: 9,
          name: "Creative Activities Club",
        },
        {
          id: 10,
          name: "APOGEE Hindi Press",
        },
        {
          id: 11,
          name: "APOGEE English Press",
        },
      ],
    };
  },
};
</script>

<style scoped>
.routerlink {
  color: white;
  text-decoration: none;
}

.listpage {
  display: flex;
  width: 95%;
  margin: auto;
}

ul {
  list-style: none;
  color: white;
}

.listpage2 {
  width: 75%;
  height: 80vh;
  overflow: scroll;
  overflow-x: hidden;
  direction: rtl;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: #8f8f8f;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #1f86fb;
  border-radius: 10px;
}

.listpage2 li {
  font-size: 20px;
  margin: 20px;
  padding: 10px 10px 10px 25px;
  /* background-color: #1F86FB; */
  cursor: pointer;
  text-align: left;
}

.listpage2 li:hover {
  background-color: #1f86fb;
}

.mobile-listpage {
  display: none;
}

.mobile-listhead {
  text-align: center;
}

.mobile-listitems {
  margin-top: 40px;
}

.mobile-listitems li {
  font-size: 20px;
  margin: 20px;
  padding: 10px;
}

.mobile-listpage li:hover {
  background-color: #1f86fb;
}

@media (max-width: 660px) {
  .listpage {
    display: none;
  }

  .mobile-listpage {
    display: block;
  }
}

@media screen and (max-width: 1350px) and (min-width: 650px) {
  .listpage2 {
    margin-left: 50px;
  }
}
</style>
