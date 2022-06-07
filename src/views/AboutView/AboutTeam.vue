<template>
  <div>
    <!-- 注释，单行或多行 -->    
    <full-page :options="options" ref="fullpage">
      <!-- 第一屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p1bgsrc + ')', backgroundPositionY: 'bottom'}">
        <AppNavigator :invert="false"></AppNavigator>
          <div class="abttm-p1-text-box"> 
            <h1>
                团队风采
            </h1>
            <h2>
                齐心协力·争创佳绩
            </h2>
          </div>
      </div>
      <!-- 第二屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p2bgsrc + ')'}">
        <AppNavigator :invert="true"></AppNavigator>
          <div class="abttm-p2-text-box"> 
            <h1><span>学习交流</span>
            </h1>
        </div>
      </div>
      <!-- 第三屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p3bgsrc + ')'}">
        <AppNavigator :invert="false"></AppNavigator>
          <div class="abttm-p3-text-box"> 
            <h1>
                <span>17万吨再生基础油一期项目<br>点火仪式</span>
            </h1>
            <p>
                2019.12.16 湘阴县工业园
            </p>
        </div>
        <Copyright />
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
}
  ,
  data() {
    return {
      p1bgsrc: require("@/assets/background/1-5-1.jpg"),
      p2bgsrc: require("@/assets/background/1-5-2.jpg"),
      p3bgsrc: require("@/assets/background/1-5-3.png"),

      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      },

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
.abttm-p1-text-box {
  display: table-cell; 
  padding-left: 12vw;
  padding-top: 21vh;
  width: 30vw;
  height: 30vh;
  color: #fff;
}
.abttm-p1-text-box h1 {
    font-size: max(3.65vw, 52px);;
    font-weight: bold;
}
.abttm-p1-text-box h2 {
    font-size: max(1.88vw, 27px);
    line-height: 4.7vw;
}
.abttm-p2-text-box {
  display: table-cell; 
  padding-left: 61.2vw;
  padding-top: 23.7vh;
  width: 30vw;
  color: #000;
  height: 30vh;
}
.abttm-p2-text-box h1 {
  font-size: max(2.6vw, 37px);
  padding-bottom: 2vh;
}
.abttm-p2-text-box p {
    font-size: max(1.04vw, 15px);
}
.abttm-p3-text-box {
  display: table-cell; 
  padding-left: 11.2vw;
  padding-top: 22.3vh;
  width: 33vw;
  height: 30vh;
}
.abttm-p3-text-box h1 {
    font-size: max(2.6vw, 37px);;
    color: #fff;
    padding-bottom: 2vh;
}
.abttm-p3-text-box p {
    font-size: max(1.04vw, 15px);
    color: #fff;
}
</style>