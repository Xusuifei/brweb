<template>
  <div>
    <!-- 注释，单行或多行 -->    
    <full-page :options="options" ref="fullpage">
      <!-- 第一屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p1bgsrc + ')'}">
        <AppNavigator :invert="false"></AppNavigator>
          <div class="abths-p1-text-box"> 
            <h1>
                沿革
            </h1>
            <h2>
                发展历程
            </h2>
          </div>
      </div>
      <!-- 第二屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p2bgsrc + ')'}">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="abtct-p2-iframe-box"> 
          <div class="abtct-p2-text-box">
            <div class="abtct-p2-btn">
              <span id="certs">资质</span>
              <span id="honors">荣誉</span>
                  <div id="abtct-p2-menu1">
                    <ul>
                      <li>111</li>
                      <li>111</li>
                      <li>111</li>
                    </ul>
                  </div>
                  <div id="abtct-p2-menu2">
                    <ul>
                      <li>222</li>
                      <li>222</li>
                      <li>222</li>
                    </ul>
                  </div>
            </div>   
          </div>
          <div class="abtct-p2-image-box"></div>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import AppNavigator from '@/components/AppNavigator.vue';

export default {
  components: {
    AppNavigator,}
  ,
  data() {
    return {
      p1bgsrc: require("@/assets/background/1-4-1.png"),
      p2bgsrc: require("../../assets/background/1-4-2-1.png"),
      
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      },
      bg02list: [
          require("../../assets/background/1-4-2-1.png"),
          require("../../assets/background/1-4-2-2.png"),
          require("../../assets/background/1-4-2-3.png"),
          require("../../assets/background/1-4-2-4.png"),
          require("../../assets/background/1-4-2-5.png"),
      ],
    } // End of Return
  }, // End of Data

  methods: {
    next() {
      // 向下滚动一页
      this.$refs.fullpage.api.moveSectionDown();
    },
  }
}

</script>

<style scoped>
.abtcl-p1-text-box {
  display: table-cell; 
  padding-left: 68.5vw;
  padding-top: 20vh;
  width: 30vw;
  height: 30vh;
}
.abtcl-p1-text-box h1 {
    font-size: max(calc(100vw * 140 / 3840), 30px);
    font-family: Source Han Sans CN, "Microsoft YaHei","微软雅黑", Helvetica, sans-serif;
    font-weight: bold;
    color: #ffffff;
}
.abtcl-p1-text-box h2 {
    font-size: max(calc(100vw * 72/3840), 14px);
    font-family: Source Han Sans CN, "Microsoft YaHei","微软雅黑", Helvetica, sans-serif;
    font-weight: 300;
    color: #ffffff;
    line-height: calc(100vw * 180 / 3840);
}
</style>