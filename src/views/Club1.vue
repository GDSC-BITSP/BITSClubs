<template>
  <div class="club">
    <div class="club-header">
      <div class="club-info">
        <div class="clublogo">
          <!-- <img
            class="club-logo"
            alt=""
            :src="'https://clubs.bits-dvm.org/assets/'+club.logo.id"
          /> -->
          <!-- <img
              class="club-logo"
              alt=""
              :src="'https://1.bp.blogspot.com/-NoQBskNMHY8/YO9hxmOQqdI/AAAAAAAAKfY/C4oFclPzW_0T65eKNLMhJZyN17A9nkydwCLcBGAsYHQ/s0/GDSC.png'"
          />   -->
          <img class="club-logo" alt="" src="../assets/ClubImg.png" />
        </div>

        <div class="club-info-text">
          <h1 class="club-title">GDSC BITS Pilani</h1>
          <div class="tags-section" id="desktop-tags">
            <div v-for="tag in club.tags" :key="tag.tags_id.id">
              <AllTags
                :name="tag.tags_id.tagtitle"
                :desc="tag.tags_id.tagdesc"
              />
            </div>
          </div>
        </div>
        <div class="club-info-desc">
          <div class="description"><a>IT Services and IT Consulting</a></div>
          <div class="website-link"><a>Website</a></div>
          <div class="Location"><a>Location</a></div>
        </div>
        <button class="apply-now">
          <a> Apply Now</a>
        </button>
      </div>
      <!-- <div class="club-status">
        <a href="https://google.com" v-if="club.isrecruiting"
          ><h1 id="recr-true" class="status-pill">
            RECRUITING
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="20"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#ffffff"
                stroke="none"
              >
                <path
                  d="M3467 5104 c-154 -28 -292 -85 -422 -175 -47 -33 -308 -287 -800
-781 -659 -661 -735 -741 -779 -816 -182 -308 -203 -676 -56 -989 53 -114 102
-185 195 -282 100 -104 174 -157 306 -220 131 -63 237 -91 364 -98 l100 -5
272 274 c217 219 273 280 281 311 28 102 -66 203 -171 183 -19 -4 -62 -29 -98
-58 -78 -63 -150 -95 -235 -107 -296 -42 -552 215 -507 509 23 150 2 124 765
891 734 737 727 731 853 764 307 80 604 -186 555 -498 -21 -134 -51 -180 -265
-397 l-192 -195 97 -95 c102 -100 162 -178 233 -303 l44 -77 224 227 c233 237
304 326 364 457 265 571 -20 1238 -615 1441 -155 53 -354 68 -513 39z"
                />
                <path
                  d="M2498 3133 c-244 -246 -277 -283 -284 -318 -10 -54 12 -111 58 -148
30 -24 46 -29 87 -29 54 0 58 2 153 76 294 228 720 18 720 -354 0 -84 -25
-173 -68 -243 -14 -23 -339 -355 -722 -737 -735 -734 -733 -732 -857 -765
-308 -80 -608 192 -556 502 22 132 53 176 279 405 l204 206 -89 89 c-103 101
-184 205 -242 313 l-40 74 -238 -239 c-249 -250 -316 -333 -378 -469 -185
-400 -105 -872 201 -1181 134 -136 301 -232 489 -282 89 -23 118 -26 260 -26
141 0 172 3 257 26 119 31 243 89 340 156 50 35 300 278 804 783 808 810 790
789 873 1003 63 159 84 282 78 450 -5 159 -30 264 -95 395 -71 145 -228 323
-364 413 -146 96 -329 159 -503 172 l-90 7 -277 -279z"
                />
              </g>
            </svg></h1
        ></a>
        <h1 id="recr-false" class="status-pill" v-else>NOT RECRUITING</h1>
      </div> -->

      <div class="tags-section" id="mobile-tags">
        <div v-for="tag in club.tags" :key="tag.tags_id.id">
          <AllTags :name="tag.tags_id.tagtitle" :desc="tag.tags_id.tagdesc" />
        </div>
      </div>
    </div>
    <div class="club-about Flipped">
      <span>
        <div class="club-text">
          <h2 class="club-subh">About Us</h2>
          <p class="club-p">
            Google Developer Student Clubs are university based community groups
            for students interested in Google developer technologies. Students
            from all undergraduate or graduate programs with an interest in
            growing as a developer are welcome. By joining a GDSC, students grow
            their knowledge in a peer-to-peer learning environment and build
            solutions for local businesses and their communities.
          </p>
        </div>

        <div class="club-text">
          <h2 class="club-subh" id="media">Key Events</h2>
          <div class="choose-events">
            <span class="event-choice" @click="choice = 0">All</span>
            <span class="event-choice" @click="choice = 1">Upcoming</span>
            <span class="event-choice" @click="choice = 2">Past</span>
          </div>
          <!-- <div class="cal-grid"> -->
          <!-- <div v-for="calItem in club.events" :key="calItem.id"> -->
          <!-- <CalendarItem
                :imgSrc="'https://clubs.bits-dvm.org/assets/'+ calItem.events_id.eventfeatureimage"
                :eventName="calItem.events_id.eventname"
                :date="calItem.events_id.eventdatetime"
                :link="calItem.events_id.eventlink"
                :description="calItem.events_id.eventdesc"
                :modalName="calItem.events_id.eventname"
              :shortDescription="calItem.events_id.eventshortdesc"

              /> -->
          <!-- </div> -->
          <div class="events-grid" v-if="choice == 0">
            <img src="../assets/Club_Events_4.png" alt="" />
            <img src="../assets/Club_Events_4.png" alt="" />
            <img src="../assets/Club_Events_4.png" alt="" />
            <img src="../assets/Club_Events_4.png" alt="" />
            <img src="../assets/Club_Events_4.png" alt="" />
          </div>
          <div class="events-grid" v-if="choice == 1">
            <img src="../assets/Club_Events_4.png" alt="" />
            <img src="../assets/Club_Events_4.png" alt="" />
            <img src="../assets/Club_Events_4.png" alt="" />
            <img src="../assets/Club_Events_4.png" alt="" />
          </div>
          <div class="events-grid" v-if="choice == 2">
            <img src="../assets/Club_Events_4.png" alt="" />
            <img src="../assets/Club_Events_4.png" alt="" />
            <img src="../assets/Club_Events_4.png" alt="" />
            <img src="../assets/Club_Events_4.png" alt="" />
          </div>
          <!-- </div> -->
        </div>

        <div>
          <h2 class="club-subh" id="media1">Prerequisites/Recruitments</h2>
          <div class="media-slider">
            <div v-for="item in club.portfolio" :key="item.id">
              <!-- <Feature :imgSrc="'https://clubs.bits-dvm.org/assets/'+item.directus_files_id.id" /> -->
            </div>
          </div>
        </div>

        <div class="club-text">
          <h2 class="club-subh">Perks of Applying</h2>
          <p class="club-p">
            Google Developer Student Clubs are university based community groups
            for students interested in Google developer technologies. Students
            from all undergraduate or graduate programs with an interest in
            growing as a developer are welcome. By joining a GDSC, students grow
            their knowledge in a peer-to-peer learning environment and build
            solutions for local businesses and their communities.
          </p>
        </div>

        <div class="recruitment">
          <div class="club-text">
            <h2 class="club-subh">Recruitment Process</h2>
            <p class="club-p">
              Google Developer Student Clubs are university based community
              groups for students interested in Google developer technologies.
              Students from all undergraduate or graduate programs with an
              interest in growing as a developer are welcome. By joining a GDSC,
              students grow their knowledge in a peer-to-peer learning
              environment and build solutions for local businesses and their
              communities.
            </p>
          </div>
        </div>

        <div>
          <h2 class="club-subh" id="media1">Gallery</h2>
          <div class="media-slider">
            <div v-for="item in club.gallery" :key="item.id">
              <!-- <Feature :imgSrc="'https://clubs.bits-dvm.org/assets/'+item.directus_files_id.id" /> -->
            </div>
          </div>
        </div>

        <div class="club-text">
          <h2 class="club-subh">Frequently Asked Questions</h2>
          <p class="club-p">
            Google Developer Student Clubs are university based community groups
            for students interested in Google developer technologies. Students
            from all undergraduate or graduate programs with an interest in
            growing as a developer are welcome. By joining a GDSC, students grow
            their knowledge in a peer-to-peer learning environment and build
            solutions for local businesses and their communities.
          </p>
        </div>

        <div class="club-text">
          <h2 class="club-subh" id="media">Club Heads</h2>
          <div class="club-head-grid">
            <div class="head-card">
              <img src="../assets/Club_Events_4.png" alt="" />
              <h1>Gurupam Bhaiya</h1>
              <h1>Creative Lead</h1>
            </div>
            <div class="head-card">
              <img src="../assets/Club_Events_4.png" alt="" />
              <h1>Gurupam Bhaiya</h1>
              <h1>Creative Lead</h1>
            </div>
            <div class="head-card">
              <img src="../assets/Club_Events_4.png" alt="" />
              <h1>Gurupam Bhaiya</h1>
              <h1>Creative Lead</h1>
            </div>
            <div class="head-card">
              <img src="../assets/Club_Events_4.png" alt="" />
              <h1>Gurupam Bhaiya</h1>
              <h1>Creative Lead</h1>
            </div>
            <div class="head-card">
              <img src="../assets/Club_Events_4.png" alt="" />
              <h1>Gurupam Bhaiya</h1>
              <h1>Creative Lead</h1>
            </div>
            <!-- <ContactCard
            v-for="contact in club.contacts" :key="contact.id"
                :imgSrc="'https://clubs.bits-dvm.org/assets/'+ contact.contacts_id.photo"  
                :name="contact.contacts_id.name"
                :email="contact.contacts_id.email"
              /> -->
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import Feature from "@/components/Feature.vue";
import CalendarItem from "@/components/CalendarItem.vue";
import ContactCard from "@/components/ContactCard.vue";
import axios from "axios";
import AllTags from "@/components/AllTags.vue";
export default {
  name: "Club",
  components: {
    Feature,
    CalendarItem,
    ContactCard,
    AllTags,
  },
  data() {
    return {
      id: this.$route.params.id,
      club: {},
      error: null,
      choice: 0,
    };
  },
  async mounted() {
    // try {
    //   const response = await axios.get(
    //     "https://clubs.bits-dvm.org/items/clubs/" + this.id+ '?fields[]=*.*.*'
    //   );
    //   this.club = response.data.data;
    //   console.log(this.club.events);
    //   // console.log(this.club.events[1].id);
    // } catch (error) {
    //   this.error = error;
    // }
  },
};
</script>

<style scoped>
#mobile-tags {
  display: none;
}

.club {
  display: flex;
  flex-direction: row;
  margin-left: 0vw;
  margin-top: 4vh;
  justify-content: center;
}

.event-choice {
  margin: 20px;
}
.event-underline {
  text-decoration: underline;
}

::-webkit-scrollbar {
  width: 13px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
.club-header,
.club-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(35, 34, 34);
  height: 86vh;
  width: 30vw;
  /* justify-content:center; */
  justify-content: flex-start;
  border-radius: 12px;
  margin-left: 20px;
}

.club-logo {
  height: 22.5vw;
  width: 22.5vw;
  border-radius: 15px;
  box-shadow: -8px 11px 45px 1px rgba(0, 0, 0, 0.52);
  -webkit-box-shadow: -8px 11px 45px 1px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: -8px 11px 45px 1px rgba(0, 0, 0, 0.52);
  margin-top: 5vh;
}

.club-info-text {
  margin-left: 0.2vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 0px;
}

#media1 {
  margin-left: 50px;
}

.tags-section {
  display: flex;
  margin-left: -5px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.tag {
  margin: 5px 3px 5px 3px;
  padding: 3px 13px 3px 13px;
  background: #616161;
  color: white;
  border-radius: 25px;
  font-size: 16px;
  text-transform: uppercase;
  display: inline-block;
  font-weight: 500;
}

.club-title {
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  color: white;
  letter-spacing: 1.3px;
  margin-top: 4vh;
  margin-left: 2vw;
}
.club-info-desc {
  font-size: 1.2rem;
  text-align: left;
  margin-top: 2vw;
  color: rgb(143, 142, 142);
  margin-left: 2vw;
}
.apply-now {
  width: 12.5em;
  height: 2em;
  background-color: rgb(30, 134, 250);
  color: white;
  font-size: 1.5rem;
  font: google-sans;
  border-radius: 12px;
  margin-top: 6vh;
  margin-left: 2vw;
}
.choose-events {
  color: #fff;
  display: flex;
  flex-direction: row-reverse;
  font-size: 1.25rem;
}

/* .club-status {
  justify-content: center;
  display: flex;
  align-items: center;
}
.status-pill {
  margin: 0px 6px 0px 6px;
  padding: 6px 20px 6px 20px;
  background: #616161;
  color: white;
  border-radius: 25px;
  font-size: 23px;
  text-transform: uppercase;
  display: inline-block;
  font-weight: 500;
  transition: transform 300ms;
  cursor: default;
}

#recr-true {
  background: #19d00a;
  box-shadow: rgba(104, 255, 70, 0.15) 0px 8px 24px;
  cursor: pointer;
}

#recr-false {
  background: rgb(255, 0, 0);
  box-shadow: rgba(255, 101, 101, 0.2) 0px 8px 24px;
} */

.club-about {
  height: 86vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-top: 0px;
  margin-left: 20px;
  background-color: rgb(35, 34, 34);
  border-radius: 12px;
  width: 70vw;
  direction: ltr;
}
.choose-events {
  cursor: pointer;
}
.club-text {
  /* width: 650px; */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-left: 50px;
  margin-right: 3vw;
}
.Flipped {
  direction: rtl;
}

.club-subh {
  /* flex-direction: column; */
  margin: 50px 0 10px 0;
  padding: 0;
  color: white;
  text-align: left;
  font-size: 1.8vw;
  letter-spacing: 0.8px;
  text-decoration: underline;
  font-style: bold;
}

.club-p {
  flex-direction: column;
  margin: 0px 0 10px 0px;
  padding: 0;
  color: rgb(143, 142, 142);
  text-align: left;
  font-size: 1.5vw;
  font-weight: 400;
  letter-spacing: 0.4px;
  font-style: bold;
}

.media-slider {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin-left: 153px;
}

*::-webkit-scrollbar {
  height: 0px;
}

*::-webkit-scrollbar-track {
  background-color: rgba(143, 142, 142);
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(30, 134, 250);
  border-radius: 10px;
}
.events-grid {
  display: flex;
  /* width:650px; */
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.events-grid > img {
  margin: 20px;
  height: 12vw;
  width: 12vw;
  border-radius: 100px;
}

.cal-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-left: 153px;
}

.club-head-grid {
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-left: 153px; */
  display: flex;
  width: 100%;
  /* overflow-x: scroll; */
  margin-left: 153px;
}
.club-head-grid > img {
  margin: 20px;
  height: 12vw;
  width: 12vw;
  border-radius: 100px;
}
.head-card > img {
  margin: 20px;
  height: 12vw;
  width: 12vw;
  border-radius: 100px;
}
.head-card {
  color: #fff;
}
.head-card > h1 {
  font-size: 1.5rem;
}

/* @media (max-width:650px) {
  .club {
    display: flex;
    flex-direction: column;
  }
  .club-info {
    width:80vw;
    margin-right: 0;
  }
  .club-about {
    width:80vw;
    padding-right: 0;
  }
} */

/* @media (max-width: 650px) {
  #mobile-tags {
    display: unset;
  }

  .club {
    margin: 0px;
  }

  .club-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .club-info-text {
    align-items: center;
    padding: 10px 0;
    margin-left: 0px;
  }

  .club-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .club-subh {
    text-align: left;
    font-size: 28px;
  }

  .club-title {
    font-size: 5.5vw;
    text-align: center;
  }

  .status-pill {
    font-size: 15px;
    text-align: center;
  }

  .tags-section {
    padding-top: 5px;
  }

  .tag {
    font-size: 12px;
  }

  .club-text {
    width: 88vw;
    margin-left: 0px;
    padding-left: 32px;
  }

  .media-slider,
  #media {
    padding-right: 20px;
    padding-left: 32px;
    margin-left: 0;
  }

  .club-p {
    font-size: 15px;
    padding-right: 20px;
    margin-left: 0;
    letter-spacing: 0;
  }

  .cal-grid {
    justify-content: flex-start;
    margin-left: 32px;
  }

  .contact-grid {
    justify-content: flex-start;
    margin-left: 20%;
  }

  #desktop-tags {
    display: none;
  }
} */
</style>
