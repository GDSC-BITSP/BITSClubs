<template>
  <div class="listpage1">
    <ul>
      <router-link to="/clubs" active-class="active" exact class="routerlink"
        ><li id="listitems">Clubs</li></router-link
      >
      <router-link
        to="/departments"
        active-class="active"
        exact
        class="routerlink"
        ><li id="listitems">Departments</li></router-link
      >
      <router-link to="/assocs" active-class="active" exact class="routerlink"
        ><li id="listitems">Assocs</li></router-link
      >
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
.listpage1 {
  width: 22%;
  margin-right: 10px;
}

ul {
  list-style: none;
}

.routerlink {
  color: white;
  text-decoration: none;
}

.listpage1 li {
  width: 220px;
  margin-top: 20px;
  font-size: 30px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
}

.routerlink.active li {
  background-color: #222f37;
}

@media screen and (max-width: 1350px) and (min-width: 660px) {
  .listpage1 {
    width: 30%;
  }

  .listpage1 li {
    width: 180px;
  }
}
</style>
