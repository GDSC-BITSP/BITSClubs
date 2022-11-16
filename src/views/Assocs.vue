<template>
  <div>
    <div class="listpage">
      <Sidebar />
      <div class="listpage2">
        <ul>
          <router-link
            to="/assoc"
            active-class="active"
            exact
            class="routerlink"
            ><li v-for="list in lists" :key="list.id">
              {{ list.name }}
            </li></router-link
          >
        </ul>
      </div>
    </div>

    <!-- MOBILE VIEW -->

    <div class="mobile-listpage">
      <div class="mobile-listhead"><h1>Assocs</h1></div>
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
  name: "AssocList",
  components: {
    Sidebar,
  },
  data() {
    return {
      lists: [
        {
          id: 1,
          name: "Assocs",
        },
        {
          id: 2,
          name: "Gurukul",
        },
        {
          id: 3,
          name: "coding club",
        },
        {
          id: 4,
          name: "English Language Activities Society",
        },
        {
          id: 5,
          name: "GDSC",
        },

        {
          id: 6,
          name: "APOGEE English Press",
        },
        {
          id: 5,
          name: "Embryo Club",
        },
        {
          id: 5,
          name: "Dance Club",
        },
        {
          id: 5,
          name: "DebSoc",
        },
        {
          id: 5,
          name: "Creative Activities Club",
        },
        {
          id: 5,
          name: "APOGEE Hindi Press",
        },
        {
          id: 5,
          name: "APOGEE English Press",
        },
        {
          id: 1,
          name: "astro club",
        },
        {
          id: 2,
          name: "Gurukul",
        },
        {
          id: 3,
          name: "coding club",
        },
        {
          id: 4,
          name: "English Language Activities Society",
        },
        {
          id: 1,
          name: "astro club",
        },
        {
          id: 2,
          name: "Gurukul",
        },
        {
          id: 3,
          name: "coding club",
        },
        {
          id: 4,
          name: "English Language Activities Society",
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
  color: white;
}

.listpage2 li:hover {
  background-color: #1f86fb;
}

.mobile-listpage {
  display: none;
}

.mobile-listhead {
  text-align: center;
  font-size: 1.25rem;
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

@media screen and (max-width: 1350px) and (min-width: 660px) {
  .listpage2 {
    margin-left: 50px;
  }
}
</style>
