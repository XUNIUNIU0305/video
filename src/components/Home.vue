<template>
  <div class="home">
     <el-radio-group v-model="radio3" @change="open">
      <el-radio-button label="MP4视频"></el-radio-button>
      <el-radio-button label="直播视频"></el-radio-button>
    </el-radio-group>
    <div class="video-con">
      <v-video-Mp4  v-if="radio3=='MP4视频'"></v-video-Mp4>
      <v-video-live  v-if="radio3=='直播视频'"></v-video-live>
    </div>
  </div>
</template>

<script>
import videoMp4 from "./video/Mp4.vue";
import videolive from "./video/liveVideo.vue";
export default {
  name: 'Home',
  data () {
    return {
      radio3: 'MP4视频',
    }
  },
  components:{
    'v-video-Mp4':videoMp4,
    'v-video-live':videolive,
  },
  methods:{
    open() {
      console.log(this.radio3)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./../assets/css/home.css";
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
