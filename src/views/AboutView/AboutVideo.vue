<template>
  <div>
    <!-- 注释，单行或多行 -->    
    <full-page :options="options" ref="fullpage">
      <!-- 第一屏 -->    
      <div fluid class="section screennobg">
        <AppNavigator :invert="false"></AppNavigator>
        <div class="video-wrap">
          <video class="home-video" autoplay loop controls="true">
              <source :src="movie1_src" type="video/mp4">
                          您的浏览器不支持视频标签
          </video>
        </div>
      </div>
      <!-- 第二屏 -->    
      <div fluid class="section screennobg">
        <AppNavigator :invert="false"></AppNavigator>
        <div class="video-wrap">
          <video class="home-video" loop controls="true">
              <source :src="movie2_src" type="video/mp4">
              您的浏览器不支持视频标签
          </video>
        </div>
        <Copyright :invert="true" />
      </div>
      <!-- 第三屏 -->    
      <div fluid class="section screennobg">
        <AppNavigator :invert="false"></AppNavigator>
        <div class="video-wrap">
          <video class="home-video" loop controls="true">
              <source :src="movie3_src" type="video/mp4">
              您的浏览器不支持视频标签
          </video>
        </div>
        <Copyright :invert="true" />
      </div>
    </full-page>
  </div>
</template>

<script>
import AppNavigator from '@/components/AppNavigator.vue';
import Copyright from '@/components/Copyright.vue';

export default {
  components: {
    AppNavigator,
    Copyright
  },
  data() {
    return {
      
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        anchors: ["video1","video2","video3"]
      },

      movie1_src: "",
      movie2_src: "",
    }
  }, // End of Data

  mounted : function() {
    this.movie1_src = require("@/assets/mainvideo.mp4");
    this.movie2_src = require("@/assets/raisemeup.mp4");
    this.movie3_src = require("@/assets/ecofriendly-20210827.mp4");
  },
  methods: {
    next() {
      // 向下滚动一页
      this.$refs.fullpage.api.moveSectionDown();
    },


  }
}

</script>

<style scoped>
.screennobg {
  background: #000;
  justify-content: center;
}
.video-wrap {
    position: relative;
    top: 15vh;
    left: 10vw;
    width: 80vw;
    height: 80vh;
    display: flex;
    justify-content: center;
}
.home-video1 {
    display: block;
    object-fit: contain;
}
</style>
