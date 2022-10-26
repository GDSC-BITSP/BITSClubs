<template>
        <a :href="registrationLink" v-if="isRecruiting"><div class="individualItem" v-if="isRecruiting"><h1>{{name}}</h1><h1 v-if="showEvent">{{eventDetails}}</h1></div></a>
</template>


<script>
export default {
  name: 'ClubListItem',
  props: {
    name: String,
    isRecruiting: Boolean,
    showEvent: Boolean,
    eventDetails:String,
    registrationLink:String
  }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #FFF;
}
a:visited {
    text-decoration: none;
    color: #FFF;
}
    div{
        width:100%;
        color: #FFF;
        display: flex;
        justify-content: space-between;
        margin:20px;
        margin-left: 0;
        padding:15px;
        padding-left:10vw;
        padding-right:10vw;
        font-size: 1.5rem;
    }
    div:hover {
        background-color: #1F86FB;
        cursor: pointer;
    }
</style>
