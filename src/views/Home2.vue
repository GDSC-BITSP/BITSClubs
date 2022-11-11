<template>
    <div class="home">
      <div class="home--header">
        <h1>Welcome to <span class="blue--underline">BITS Clubs</span></h1>
        <h4>One stop destination for all your club needs</h4>
      </div>
  
      <div class="home--display--tiles_desktop">
        <div class="home--display--tiles">
          <div class="col1">
            <!-- <div class="flip-card"> -->
              <div class="col1--row1 flip-card-inner">
                <div class="flip-card-front">
                  <img src="../assets/Col1Row1.png" />
                </div>
                <!-- <div class="flip=card-back">
              Coding
            </div> -->
              </div>
            </div>
            <div class="col1--row2">
              <!-- <div class="flip-card-front"> -->
              <img src="../assets/Col1Row2.png" />
              <!-- </div> -->
            </div>
          </div>
          <div class="col2">
            <!-- <div class="flip-card-front"> -->
            <img src="../assets/Col2.png" />
            <!-- </div> -->
          </div>
          <div class="col3">
            <div class="col3--row1">
              <div>
                <!--<div class="flip-card-front"> -->
                <img src="../assets/Col3Row1_1.png" />
                <!-- </div> -->
              </div>
              <div>
                <!-- <div class="flip-card-front"> -->
                <img src="../assets/Col3Row1_2.png" />
                <!-- </div> -->
              </div>
            </div>
            <div class="col1--row2">
              <!-- <div class="flip-card-front"> -->
              <img src="../assets/Col3Row2.png" />
              <!-- </div> -->
            </div>
          </div>
        </div>
  
        <div class="home--display--tiles_mobile">
          <div class="row1">
            <div class="row1--col1 flip-card-inner">
              <div class="flip-card-front">
                <img src="../assets/Col1Row1.png" />
              </div>
              <!-- <div class="flip=card-back">
              Coding
            </div> -->
            </div>
            <div class="row1--col2">
              <!-- <div class="flip-card-front"> -->
              <img src="../assets/Col1Row2.png" />
              <!-- </div> -->
            </div>
          </div>
          <div class="row2">
            <!-- <div class="flip-card-front"> -->
            <div class="row2--col1">
              <img src="../assets/Col3Row1_2.png" />
            </div>
            <div class="row3--col2">
              <!-- <div class="flip-card-front"> -->
              <img src="../assets/Col3Row1_1.png" />
              <!-- </div> -->
            </div>
            <!-- </div> -->
          </div>
          <div class="row3">
            <div class="row3--col1">
              <!--<div class="flip-card-front"> -->
              <img src="../assets/Col3Row2.png" />
              <!-- </div> -->
              <!-- </div> -->
              <!-- <div> -->
              <!-- <div class="flip-card-front"> -->
              <!-- <img src="../assets/Col3Row1_2.png"> -->
              <!-- </div> -->
              <!-- </div> -->
            </div>
          </div>
        </div>
  
        <!-- <div class="club-grid">
        <div 
          v-for="clubitem in clubs"
          :key="clubitem.id">
          <router-link 
            :to="{ path: '/club/'+clubitem.id}"
            class="router-link-style"
            >
            <ClubItem
              :id="clubitem.id"
              :name="clubitem.name"
              :type="clubitem.clubtype"
              :tags="clubitem.tags"
              :imgSrc="'https://clubs.bits-dvm.org/assets/'+clubitem.logo.id"
            />
          </router-link>
  
        </div> -->
  
        <div class="desktop">
          <div class="tab">
            <button class="tablinks active" @click="openTab('Clubs')">
              Clubs
              <div class="und"></div>
            </button>
            <button class="tablinks" @click="openTab('Depts')">
              Departments
              <div class="und"></div>
            </button>
            <button class="tablinks" @click="openTab('Assocs')">
              Assocs
              <div class="und"></div>
            </button>
            <button class="tablinks" @click="openTab('TechTeams')">
              Tech Teams
              <div class="und"></div>
            </button>
          </div>
          <router-link to="/clubs" active-class="active" exact class="routerlink"><button class="listpglink">See All</button></router-link>
          <!-- clubs -->
          <div id="Clubs" class="tabcontent" style="display: block">
            <div class="home-clubs">
              <div
                v-for="(item, index) in clubs"
                v-if="index < 3"
                class="d-block w-25 mx-3 home-card"
              >
                <router-link class="d-block" to="/club" exact
                  ><img :src="item.imglink" class="d-block w-100" alt="..."
                /></router-link>
                <p>{{ item.name }}</p>
              </div>
            </div>
          </div>
  
          <!-- Departments -->
          <div id="Depts" class="tabcontent">
            <div class="home-clubs">
              <div
                v-for="(item, index) in depts"
                v-if="index < 3"
                class="d-block w-25 mx-3 home-card"
              >
              <router-link class="d-block" to="/department" exact
                  ><img :src="item.imglink" class="d-block w-100" alt="..." /></router-link>
                <p>{{ item.name }}</p>
              </div>
            </div>
          </div>
  
          <!-- Assocs -->
          <div id="Assocs" class="tabcontent">
            <div class="home-clubs">
              <div
                v-for="(item, index) in assocs"
                v-if="index < 3"
                class="d-block w-25 mx-3 home-card"
              >
              <router-link class="d-block" to="/assoc" exact
                  ><img :src="item.imglink" class="d-block w-100" alt="..." /></router-link>
                <p>{{ item.name }}</p>
              </div>
            </div>
          </div>
          <!-- Tech Teams -->
          <div id="TechTeams" class="tabcontent">
            <div class="home-clubs">
              <div
                v-for="(item, index) in techteams"
                v-if="index < 3"
                class="d-block w-25 mx-3 home-card"
              >
              <router-link class="d-block" to="/techteam" exact
                  ><img :src="item.imglink" class="d-block w-100" alt="..." /></router-link>
                <p>{{ item.name }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile">
          <div class="dropdown">
            <button class="dropbtn" id="drpbtn" @click="show()">Clubs</button>
            <div class="dropdown-content" id="drpdwn">
              <button
                class="tablinks active mob-btn"
                id="clubbtn"
                @click="openTab('Clubs')"
              >
                Clubs
              </button>
              <button
                class="tablinks mob-btn"
                id="deptbtn"
                @click="openTab('Depts')"
              >
                Departments
              </button>
              <button
                class="tablinks mob-btn"
                id="assocbtn"
                @click="openTab('Assocs')"
              >
                Assocs
              </button>
              <button
                class="tablinks mob-btn"
                id="ttbtn"
                @click="openTab('TechTeams')"
              >
                Tech Teams
              </button>
            </div>
          </div>
          <div id="Clubs-mob" class="tabcontent" style="display: block">
            <div class="home-clubs">
              <div
                v-for="(item, index) in clubs"
                v-if="index < 2"
                class="d-block w-25 mx-3 home-card"
              >
                <router-link class="d-block" to="/club" exact
                  ><img :src="item.imglink" class="d-block w-100" alt="..."
                /></router-link>
                <p>{{ item.name }}</p>
              </div>
            </div>
          </div>
  
          <!-- Departments -->
          <div id="Depts-mob" class="tabcontent">
            <div class="home-clubs">
              <div
                v-for="(item, index) in depts"
                v-if="index < 2"
                class="d-block w-25 mx-3 home-card"
              >
              <router-link class="d-block" to="/department" exact
                  ><img :src="item.imglink" class="d-block w-100" alt="..." /></router-link>
                <p>{{ item.name }}</p>
              </div>
            </div>
          </div>
  
          <!-- Assocs -->
          <div id="Assocs-mob" class="tabcontent">
            <div class="home-clubs">
              <div
                v-for="(item, index) in assocs"
                v-if="index < 2"
                class="d-block w-25 mx-3 home-card"
              >
              <router-link class="d-block" to="/assoc" exact
                  ><img :src="item.imglink" class="d-block w-100" alt="..." /></router-link>
                <p>{{ item.name }}</p>
              </div>
            </div>
          </div>
          <!-- Tech Teams -->
          <div id="TechTeams-mob" class="tabcontent">
            <div class="home-clubs">
              <div
                v-for="(item, index) in techteams"
                v-if="index < 2"
                class="d-block w-25 mx-3 home-card"
              >
              <router-link class="d-block" to="/techteam" exact
                  ><img :src="item.imglink" class="d-block w-100" alt="..." /></router-link>
                <p>{{ item.name }}</p>
              </div>
            </div>
          </div>
        </div>
  
        <div class="dropdown_mobile">
          <select name="choiceOfDept">
            <option value="Clubs"></option>
            <option value="Depts"></option>
            <option value="Assocs"></option>
            <option value="Tech Teams"></option>
          </select>
        </div>
  
        <div class="home-footer">
          <div class="home-footer-1">
            <router-link class="home-footer-1" to="/developers" exact
              >Developers</router-link
            >
          </div>
          <div class="home-footer-2">
            <p>
              <svg
                width="83"
                height="1.4rem"
                viewBox="0 0 83 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6895 20.0862L33.1116 12.3277C33.863 11.8942 34.5217 11.3169 35.05 10.6289C35.5783 9.94079 35.9659 9.1554 36.1907 8.31753C36.4155 7.47966 36.473 6.60571 36.36 5.7456C36.2471 4.88549 35.9658 4.05606 35.5323 3.30465C35.0988 2.55325 34.5215 1.8946 33.8334 1.3663C33.1453 0.83799 32.3599 0.45039 31.5221 0.225613C30.6842 0.000836553 29.8102 -0.0567198 28.9501 0.0562525C28.09 0.169225 27.2606 0.450498 26.5092 0.884021L3.31142 14.2751L19.6895 20.0862Z"
                  fill="#FD2B25"
                />
                <path
                  d="M29.792 39.9999C31.2489 40.0055 32.6668 39.529 33.8247 38.6447C34.9826 37.7604 35.8155 36.5179 36.1936 35.1109C36.5717 33.7039 36.4738 32.2113 35.9151 30.8657C35.3564 29.5201 34.3684 28.3971 33.1049 27.6717L9.90711 14.2806C9.1557 13.8471 8.32625 13.5658 7.46614 13.4528C6.60603 13.3398 5.7321 13.3974 4.89423 13.6222C4.05636 13.847 3.27097 14.2346 2.58289 14.7629C1.89482 15.2912 1.31755 15.9498 0.884027 16.7012C0.450505 17.4527 0.169231 18.2821 0.0562586 19.1422C-0.0567137 20.0023 0.000818934 20.8762 0.225596 21.7141C0.450373 22.552 0.837972 23.3374 1.36628 24.0254C1.89458 24.7135 2.55325 25.2908 3.30466 25.7243L26.5024 39.1154C27.501 39.697 28.6364 40.0023 29.792 39.9999Z"
                  fill="#1F86FB"
                />
                <path
                  d="M52.8517 39.998C54.0096 39.9995 55.1473 39.6943 56.149 39.1135L79.3468 25.7224L63.1705 19.8027L49.5389 27.6698C48.2814 28.3991 47.2994 29.5227 46.7449 30.8665C46.1905 32.2102 46.0944 33.6993 46.4717 35.1032C46.8489 36.5071 47.6784 37.7474 48.8318 38.6323C49.9851 39.5172 51.398 39.9972 52.8517 39.998Z"
                  fill="#FFB800"
                />
                <path
                  d="M76.0641 26.5917C77.5178 26.5909 78.9306 26.1109 80.084 25.2261C81.2374 24.3412 82.0669 23.1008 82.4441 21.697C82.8214 20.2931 82.7254 18.804 82.1709 17.4602C81.6164 16.1164 80.6344 14.9929 79.377 14.2635L56.1792 0.872467C54.6651 0.0512309 52.8903 -0.146595 51.2326 0.321126C49.5748 0.788848 48.1652 1.88518 47.3036 3.37668C46.4421 4.86818 46.1968 6.63706 46.6199 8.30673C47.043 9.9764 48.1011 11.415 49.569 12.3162L72.7667 25.7072C73.7696 26.2854 74.9065 26.5903 76.0641 26.5917Z"
                  fill="#00AA47"
                />
              </svg>
              Google Developer Student Clubs
            </p>
            <p>BITS Pilani</p>
          </div>
        </div>
        <!-- <Footer/> -->
      </div>
    
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  import ClubItem from "@/components/ClubItem.vue";
  import axios from "axios";
  import AllTags from "@/components/AllTags.vue";
  // import Footer from '@/components/Footer.vue'
  export default {
    name: "Home",
    components: {
      Navbar,
      ClubItem,
      AllTags,
    },
    data() {
      return {
        //  information about clubs, depts , assocs , techteams from backend
  
        clubs: [
          { name: "Dance Club", imglink: require("@/assets/bits-image.png") },
          {
            name: "Wall Street Club",
            imglink: require("@/assets/bits-image.png"),
          },
          {
            name: "English Language Activities Society",
            imglink: require("@/assets/bits-image.png"),
          },
          { name: "Dance Club", imglink: require("@/assets/bits-image.png") },
        ],
        depts: [
          { name: "DVM", imglink: require("@/assets/bits-image.png") },
          {
            name: "Department of Controls",
            imglink: require("@/assets/bits-image.png"),
          },
          {
            name: "DLE",
            imglink: require("@/assets/bits-image.png"),
          },
          { name: "Dance Club", imglink: require("@/assets/bits-image.png") },
        ],
        techteams: [
          { name: "SUTT", imglink: require("@/assets/bits-image.png") },
          { name: "PUTT", imglink: require("@/assets/bits-image.png") },
        ],
        assocs: [
          { name: "HCA", imglink: require("@/assets/bits-image.png") },
          { name: "CSA", imglink: require("@/assets/bits-image.png") },
          {
            name: "Maths",
            imglink: require("@/assets/bits-image.png"),
          },
          ,
        ],
        error: null,
        screenWidth: screen.width,
      };
    },
    methods: {
      openTab(category) {
        var i, tabcontent, tablinks;
        var j = 0;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        if (category === "Depts") j = 1;
        if (category === "TechTeams") j = 3;
        if (category === "Assocs") j = 2;
        var element = tablinks[j];
        element.classList.add("active");
        document.getElementById(category).style.display = "block";
        document.getElementById("drpbtn").innerHTML = category;
        document.getElementById("drpdwn").style.display = "none";
        if (category == "Clubs")
          document.getElementById("Clubs-mob").style.display = "block";
        if (category == "Depts")
          document.getElementById("Depts-mob").style.display = "block";
        if (category == "Assocs")
          document.getElementById("Assocs-mob").style.display = "block";
        if (category == "TechTeams")
          document.getElementById("TechTeams-mob").style.display = "block";
      },
  
      show() {
        document.getElementById("drpdwn").style.display = "block";
      },
      // async mounted () {
      //   try {
      //     const response = await axios.get('https://clubs.bits-dvm.org/items/clubs?fields[]=*.*.*')
      //     this.clubs = response.data.data
      //     console.log(this.clubs)
      //   } catch (error) {
      //     this.error = error;
      //   }
      // }
    },
    m() {
      document.getElementById("Clubs-mob").style.display = "block";
  
      document.getElementById("Depts-mob").style.display = "none";
  
      document.getElementById("Assocs-mob").style.display = "none";
  
      document.getElementById("TechTeams-mob").style.display = "none";
    },
  
    created() {
      this.m();
    },
  };
  
  // async mounted () {
  //   try {
  //     const response = await axios.get('https://clubs.bits-dvm.org/items/clubs?fields[]=*.*.*')
  //     this.clubs = response.data.data
  //     console.log(this.clubs)
  //   } catch (error) {
  //     this.error = error;
  //   }
  // }
  </script>
  
  <style scoped>
  .home {
    padding: none;
    padding-bottom: 75px;
    /* margin: 0 40px 0 40px; */
    width: 100%;
    height: 100%;
  }
  
  .mobile {
    display: none;
  }
  .home--display--tiles_mobile {
    display: none;
  }
  .dropdown_mobile {
    display: none;
  }
  
  .home {
    padding: none;
    padding-bottom: 75px;
    /* margin: 0 40px 0 40px; */
    width: 100%;
    height: 100%;
  }
  
  .home--header {
    margin-top: 60px;
    text-align: center;
    margin-bottom: 50px;
  }
  .blue--underline {
    text-decoration: underline;
    text-decoration-color: #1f86fb;
  }
  .home--header > h1 {
    color: #fff;
    font-size: 45px;
    margin-bottom: 25px;
  }
  .home--header > h4 {
    color: #c7c7c7;
    font-size: 30px;
  }
  
  .home--display--tiles_desktop {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 100px;
  }
  
  .col3--row1 {
    display: flex;
  }
  img {
    margin: 10px;
  }
  
  #carouselExampleIndicators {
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 40px 0;
  }
  .carousel-inner {
    width: 100%;
  }
  
  .carousel-inner img {
    border-radius: 8px;
  }
  .carousel-indicators button {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    margin: -15px 8px;
  }
  
  .hero-image {
    height: 500px;
    width: 90vw;
    background: #2f2f2f;
    margin: 20px 60px 20px 60px;
    border-radius: 20px;
    background-image: url(../assets/bits-image.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  
  .club-grid {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
  }
  
  .media-slider {
    overflow-x: scroll;
  }
  
  .tags-section {
    display: flex;
    margin: 2px 10px 5px 10px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  router-link {
    text-decoration: none;
  }
  
  @media (max-width: 600px) {
    .dropdown_mobile {
      color: #fff;
      width: 130px;
    }
  
    .tab {
      display: none;
    }
  
    .row1,
    .row2,
    .row3 {
      display: flex;
      margin-left: 20px;
      margin: auto;
    }
    img {
      height: 23vh;
      width: 35vw;
    }
    .row3--col1 > img {
      width: 74vw;
    }
  
    .desktop {
      display: none;
    }
  
    .home--display--tiles_desktop {
      display: none;
    }
  
    .home--display--tiles_mobile {
      display: flex;
      flex-direction: column;
      margin-bottom: 80px;
    }
    .mobile {
      display:inline-block;
    }
  
    .hero-image {
      width: 85vw;
      height: 250px;
    }
    /* .removemb {
      display: none;
    } */
  }
  
  .router-link-style {
    color: inherit;
    text-decoration: none; /* no underline */
  }
  
  .club-grid {
    justify-content: center;
  }
  .home {
    overflow: hidden;
    color: white;
  }
  
  .home-card p {
    text-align: left;
    margin-top: 25px;
    font-size: 1.6rem;
  }
  .home-card img {
    width: 400px;
    height: 230px;
    transform: scale(1.15);
  }
  .home-clubs {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 100%;
    margin-top: 60px;
  }
  .home .und {
    height: 4px;
  }
  /* Style the tab */
  .tab {
    display: flex;
    color: white;
    justify-content: space-around;
    margin-bottom: 50px;
  }
  
  /* Style the buttons inside the tab */
  .tab button {
    justify-content: center;
    background-color: inherit;
    color: white;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 7px 16px;
    transition: 0.3s;
    font-size: 2.1rem;
    font-weight: 500;
  }
  
  /* Change background color of buttons on hover */
  .tab button:hover .und {
    height: 4px;
    border-radius: 12px;
  }
  
  /* Create an active/current tablink class */
  .tab button.active .und {
    background-color: #1f86fb;
    height: 4px;
    border-radius: 12px;
  }
  
  .listpglink {
    font-size: 1.2rem;
    background-color: #1f1f1f;
    border: none;
    color: white;
  }
  .listpglink:hover {
    text-decoration: underline;
  }
  /* Style the tab content */
  .tabcontent {
    display: none;
    padding: 0;
    -webkit-animation: fadeEffect 1s;
    animation: fadeEffect 1s;
    margin-bottom: 150px;
    margin-top: 50px;
  }
  
  /* Fade in tabs */
  @-webkit-keyframes fadeEffect {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes fadeEffect {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  p {
    line-height: 1.6;
  }
  @media screen and (max-width: 1000px) {
    .home-card p {
      font-size: 0.95rem;
    }
    .home-card img {
      height: 10rem;
    }
    .home-card {
      flex-wrap: nowrap;
    }
    .tab button {
      font-size: 1.2rem;
    }
  }
  
  .home-footer {
    position: absolute;
    background-color: #222f37;
    height: 325px;
    width: 100%;
    padding-top: 60px;
    padding-bottom: 40px;
  }
  .home-footer-1 {
    font-size: 2rem;
    margin-bottom: 60px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
  }
  .home-footer-2 {
    margin-top: 100px;
    font-size: 1.5rem;
    font-weight: 0;
  }
  
  @media screen and (max-width: 600px) {
    .desktop {
      display: none;
    }
    .mobile .tabcontent {
      display: none;
    }
  
    .tabcontent {
      display: block;
    }
    .home-card img {
      height: 140px;
      transform: scale(1.5, 1.2);
      z-index: 1;
    }
    .home-card p {
      font-size: 24px;
    }
  
    .dropbtn {
      background-color: #222f37;
      color: white;
      font-size: 34px;
  
      border-radius: 2%;
      height: 64px;
      width: 312px;
      border: none;
      cursor: pointer;
    }
  
    .dropdown {
      position: relative;
      display: inline-block;
    }
  
    .dropdown-content {
      display: none;
  
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    }
  
    .dropdown-content tablinks {
    }
    .mob-btn {
      display: block;
      background-color: #222f37;
  
      color: white;
      padding: 16px;
      font-size: 30px;
      height: 64px;
      width: 312px;
      border: none;
      cursor: pointer;
    }
    .home-footer p {
      margin-bottom: 10px;
      font-size: 20px;
    }
    .dropdown-content a:hover {
      background-color: #f1f1f1;
    }
  
    .dropdown:hover .dropbtn {
      background-color: #222f37;
    }
  }
  
  @media screen and (min-width: 700px) {
    /* Styles go here */
    .mobile {
      display: none;
    }
  }
  </style>
  