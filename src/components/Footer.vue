<template>
    <!-- <v-footer padless class="">
        <v-card flat tile color="#222F37" width="100%" height="330px" class="mx-auto">
            <v-card-text>
                <div class="footer-dev pt-12">Developers</div>
            </v-card-text>
            <div class="pt-12 pb-3">
                <v-img class="gdsc-logo mx-auto" src="https://svgshare.com/i/nPe.svg"></v-img>
            </div>
            <v-card-text>
                <div class="footer-bits mx-auto">BITS Pilani</div>
            </v-card-text>

        </v-card>
    </v-footer> -->
    <div class="home-footer">
      <div class="home-footer-1"><router-link class="home-footer-1" to="/developers" exact>Developers</router-link></div>
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
    </div>

</template>



<script>



export default {
    data: () => ({
        show: false,
    }),
}
</script>

<style>
.footer-dev {
    /* width: 212px; */
    /* height: 48px; */

    font-family: 'Google Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    /* identical to box height, or 120% */


    color: #FFFFFF;
}

.gdsc-logo {
    width: 575px;
    height: 35.62px;


    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}

.home-footer {
  background-color: #222f37;
 
  
  padding-top: 60px;
  padding-bottom: 40px;
}
.home-footer-1 {
  font-size: 2rem;
margin-bottom: 60px;
font-weight: 500;
color: #FFF;
text-decoration: none;
}
.home-footer-2 {
  font-size: 1.75rem;
  color:#FFFFFF;
}

.footer-bits {
    width: 575px;
    height: 34px;

    font-family: 'Google Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    /* identical to box height, or 121% */

    text-align: center;

    color: #D9D9D9;


    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}
</style>