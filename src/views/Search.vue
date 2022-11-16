<template>
  <!-- <div class="search">
      <div class="search--list">
          <div class="clubs">Clubs</div>
          <div class="departments">Departments</div>
          <div class="assocs">Assocs</div>
      </div>
      <div class="display--list">
          123
      </div>
    </div> -->
  <!-- <div class="search"> -->
  <!-- <input
      type="text"
      class="search-bar"
      placeholder="Search for any department, assoc or club"
      v-model="search_param"
      v-on:keyup.enter="callMeMaybe(search_param)"
      v-on:submit="callMeMaybe(search_param)"
    />

    <br />

    <div class="club-grid">
      <div v-for="clubitem in clubs" :key="clubitem.id">
        <router-link
          :to="{ path: '/club/' + clubitem.id }"
          class="router-link-style"
        >
          <ClubItem
            :id="clubitem.id"
            :name="clubitem.name"
            :type="clubitem.clubtype"
            :tags="clubitem.tags"
            :imgSrc="'https://clubs.bits-dvm.org/assets/' + clubitem.logo.id"
          />
        </router-link>
      </div>
    </div>
  </div> -->
  <div>
    <Sidebar />
  </div>
</template>

<script>
import ClubItem from "@/components/ClubItem.vue";
import Sidebar from "@/components/Sidebar.vue";
import axios from "axios";

export default {
  name: "Search",
  components: {
    ClubItem,
    Sidebar,
  },
  data() {
    // return {
    //   renderComponent: true,
    //   clubs: [],
    //   error: null,
    //   search: "",
    //   search_param: "",
    // };
    clubs: [
      {
        id: "1",
        name: "xyz",
        type: "coding",
      },
    ];
  },
  // mounted: function mounted() {
  //   this.getAllData();
  // },
  // methods: {
  //   callMeMaybe(search_param) {
  //     this.search = search_param;
  //     this.getAllData();
  //     console.log(search_param);
  //   },
  //   getAllData() {
  //     if (this.search !== "") {
  //       this.clubs=[];
  //       let newIds = [];
  //       var newClubs = [];
  //       axios
  //         .get("https://clubs.bits-dvm.org/items/clubs?search=" + this.search)
  //         .then((response) => {
  //           var someClubs = [];
  //           someClubs = response.data.data;
  //           console.log(someClubs);
  //           someClubs.forEach((item) => {
  //             console.log(item);
  //             newIds = [...newIds, item.id];
  //           });
  //           console.log(newIds);

  //           // console.log(newIds + "pl");

  //           newIds.forEach((id) => {
  //             axios
  //               .get(
  //                 "https://clubs.bits-dvm.org/items/clubs/" +
  //                   id +
  //                   "?fields[]=*.*.*"
  //               )
  //               .then((response) => {
  //                 newClubs = [...newClubs, response.data.data];
  //                 console.log(newClubs);
  //                 this.clubs = newClubs;
  //               });
  //           });
  //         });
  //     } else {
  //       return axios
  //         .get("https://clubs.bits-dvm.org/items/clubs?fields[]=*.*.*")
  //         .then((response) => {
  //           this.clubs = response.data.data;
  //           console.log(this.clubs);
  //         });
  //     }
  //   },
  // },
};
</script>

<style scoped>
/* .search {
  margin: none;
  padding: none;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 75px;
  color:white;
} */
.search {
  color: white;
  font-size: 2.5rem;
  display: flex;
  /* justify-content: space-around; */
  padding: 80px;
}
.search--list {
  margin-top: 0px;
  width: 30%;
  text-align: left;
}
.clubs {
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  border: none;
}
.clubs:hover {
  background-color: #222f37;
  cursor: pointer;
}
.clubs:clicked {
  background-color: #222f37;
}
.departments:hover {
  background-color: #222f37;
  cursor: pointer;
}
.assocs:hover {
  background-color: #222f37;
  cursor: pointer;
}
.departments {
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  border: none;
}
.assocs {
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 10px;
  border: none;
}
.display--list {
  margin-left: 50px;
  width: 70%;
  text-align: left;
  overflow-y: auto;
}
/* 
.club-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 0 40px 0 40px;
}

.search-bar {
  width: 45vw;
  height: 65px;
  border: solid 2px #2f2f2f;
  background: none;
  border-radius: 35px;
  font-size: 25px;
  font-weight: 400;
  color: white;
  font-family: Airbnb Cereal App, sans-serif;
  margin: 20px;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
}

input {
  padding: 0 30px 0 30px;
}

@media (max-width: 650px) {
  .search-bar {
    width: 70vw;
    font-size: 14px;
  }
}

.router-link-style {
  color: inherit;
  text-decoration: none; /* no underline */
</style>
