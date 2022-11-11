<template>
  <div class="navbar-root">
    <div class="nav-logo">
      <img id="bitsclubs-logo" src="../assets/bc-logo.png" alt="bc-logo" />
      <router-link active-class="nav-active" class="logo-text" to="/" exact
        >BITS clubs</router-link
      >

      <div class="hamburger">
        <div class="container">
          <ul class="toggle">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="nav-menu">
      <div class="nav-item">
        <router-link
          active-class="nav-active"
          class="nav-item"
          to="/search"
          exact
        >
          <div class="searchbar">
            <i class="fa-solid fa-magnifying-glass"></i
            ><input
              type="text"
              placeholder="Search for Clubs"
              class="club--search"
            />
          </div>
        </router-link>
      </div>

      <div class="nav-item">
        <router-link
          active-class="nav-active"
          class="nav-item"
          to="/events"
          exact
          ><span class="remove-tab">Events</span></router-link
        >
      </div>
      <div class="nav-item">
        <router-link
          active-class="nav-active"
          class="nav-item"
          to="/recruitments"
          exact
          ><span class="remove-tab">Recruitments</span></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};

$(document).ready(function () {
  $(".container ul.toggle").click(function () {
    $(this).toggleClass("active");
    $(".nav-menu").toggleClass("active");
    $("body").toggleClass("hide");
  });

  $(".nav-item").click(function () {
    $(".container ul.toggle").toggleClass("active");
    $(".nav-menu").toggleClass("active");
    $("body").toggleClass("hide");
  });
});
</script>

<style scoped>
.bg-color {
  background-color: #171717;
}

.club--search {
  color: #fff;
  padding: 16px 40px;
  gap: 12px;
  width: 290px;
  height: 62px;
  background: #222f37;
  border-radius: 87px;
  border: none;
}

.club--search:hover {
  text-decoration: none;
  color: #fff;
}

input:focus::placeholder {
  color: transparent;
}

.invisible {
  display: none;
}

#bitsclubs-logo {
  height: 50px;
  width: 50px;
}

.searchbar {
  display: flex;
  width: 110%;
  font-size: 24px;
  position: relative;
}

.searchbar > input {
  padding-left: 60px;
}

i {
  position: absolute;
  top: 18px;
  left: 24px;
}

.nav-logo {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5px;
}

.nav-item {
  margin: 0 4%;
  font-size: 28px;
  font-weight: 400;
  line-height: 34px;
  color: #fff;
  text-decoration: none;
}

.logo-text {
  margin-left: 10px;
  font-size: 36px;
  font-weight: 400;
  color: white;
  text-decoration: none;
}

input::placeholder {
  color: #fff;
}

.logo-text:hover {
  opacity: 0.8;
}

.nav-item:hover {
  opacity: 0.8;
}

/* .nav-active:hover {
        opacity: 1;
    }

    .nav-active {
        text-decoration: underline;
    } */

.hamburger {
  display: none;
  margin-left: 29%;
}

.container {
  width: 80%;
  display: flex;
}

.container ul.toggle {
  position: relative;
  z-index: 200001;
  top: 5%;
  width: 12px;
  height: 26px;
  cursor: pointer;
  margin: 0;
}

.container ul.toggle li {
  position: absolute;
  transform: translateY(-50%);
  height: 3px;
  width: 70%;
  list-style: none;
  background: #fff;
  transition: 0.9s;
  margin-left: -32px;
}

.container ul.toggle li:nth-of-type(1) {
  top: 20%;
}

.container ul.toggle li:nth-of-type(2) {
  top: 50%;
  transition: 0.6s;
}

.container ul.toggle li:nth-of-type(3) {
  top: 80%;
}

.container ul.toggle.active li:nth-of-type(1) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.container ul.toggle.active li:nth-of-type(2) {
  opacity: 0;
}

.container ul.toggle.active li:nth-of-type(3) {
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
}

.nav-item > span {
  display: inline;
}

@media screen and (max-width: 1030px) and (min-width: 720px) {
  .nav-item > span {
    display: none;
  }

  /* .searchbar {
    position: relative;
    right:0;
} */
}

@media screen and (max-width: 720px) {
  .navbar-root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 30px 20px 0px 23px;
  }

  .hamburger {
    display: unset;
  }

  .club--search {
    text-align: center;
  }

  .nav-menu {
    flex-direction: column;
    position: absolute;
    left: 750px;
    top: 0;
    background: #1e1f1e;
    width: 0;
    height: 110vh;
    box-sizing: border-box;
    padding: 50px 0px;
    text-align: center;
    z-index: 20000;
    transition: 0.4s linear;
    overflow-x: hidden;
  }

  .nav-menu.active {
    width: 100vw;
    overflow: hidden;
    left: 0px;
  }

  .nav-item {
    padding: 20px;
    font-size: 26px;
  }

  .logo-text {
    font-size: 6.1vw;
    margin: 10px 6px 10px 15px;
    font-weight: 800;
  }
}

@media screen and (min-width: 720px) {
  .navbar-root {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 60px 0 60px;
  }

  .nav-menu {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: auto;
  }
}
</style>
