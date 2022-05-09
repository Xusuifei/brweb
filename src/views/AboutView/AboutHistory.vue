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
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="abths-p2-upperbox">
          <div class="abths-p2-text-box-top">
              <h1><span>公司沿革</span></h1>
              <p>
                针对当时地沟油回流食物链，给人类健康造成伤害，废矿物油被填埋、焚烧或充当成品机油直接销售，在造成能源浪费的同时还给地球环境造成破坏，给交通构成安全隐患，远大集团决心站出来揭露他并通过自身行动彻底改变他，因此，一方面给国家相关领导提出《关于建立废油专营制度的建议》，另一方面筹建远大再生油公司
              </p>
          </div>
        </div>
        <div class="abths-p2-image-container"><img src="@/assets/img/1-3-2.png"></div>
        <div class="abths-p2-hover-box">
          <div class="abths-p2-hover-left"></div>
          <div class="abths-p2-hover-right">
            <ul>
              <li v-for="count in 15" v-bind:key="count">
                {{count + 2007}}
              </li>
            </ul>
          </div>
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
      p1bgsrc: require("@/assets/background/1-3-1.png"),
      
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      },
      
      p2data: [{
        title: "资质",
        lists: [{
            name: "危险废物经营许可证",
            fullimage: require("@/assets/img/危险废物经营许可证 (1).png"),
          },
          {
            name: "资源综合利用认定证书",
            fullimage: require("@/assets/img/资源综合利用认定证书.png"),
          },
          {
            name:  "危险废物经营许可证",
            fullimage: require("@/assets/img/危险废物经营许可证.png"),
          },
          {
            name: "排污许可证",
            fullimage: require("@/assets/img/排污许可证.png"),
          },
        ]
      },
      {
        title: "荣誉",
        lists: [{
          name: "湘江新区百强企业",
          fullimage: require("@/assets/img/湘江新区百强企业.jpg"),
        }] // End of 
      }] //End of p2data
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
.abths-p1-text-box {
  display: table-cell; 
  padding-left: 68.5vw;
  padding-top: 20vh;
  width: 30vw;
  height: 30vh;
}
.abths-p1-text-box h1 {
    font-size: max(calc(100vw * 140 / 3840), 30px);
    font-family: Source Han Sans CN, "Microsoft YaHei","微软雅黑", Helvetica, sans-serif;
    font-weight: bold;
    color: #ffffff;
}
.abths-p1-text-box h2 {
    font-size: max(calc(100vw * 72/3840), 14px);
    font-family: Source Han Sans CN, "Microsoft YaHei","微软雅黑", Helvetica, sans-serif;
    font-weight: 300;
    color: #ffffff;
    line-height: calc(100vw * 180 / 3840);
}
.abths-p2-hover-box {
  position: absolute;
  min-width: 150px;
  width: 12.5vw;
  left: 77vw;
  top: 18vh;
  height: 82vh;
  background: rgba(0,0,0,0.7);
}
.abths-p2-hover-left{
    border-right: 1px solid white;
    display: inline-block;
    width: 4vw;
    margin-top: 4vh;
    height: calc(100% - 8vh);
}
.abths-p2-hover-right {
  width: 8vw;
  display: inline-block;
}
.abths-p2-hover-right ul{
    list-style-position: inside;
    margin-left: -0.22em;
    color: #ffffff;
}
.abths-p2-hover-right li{
    margin-top: 1.0em;
}
.abths-p2-hover-right li:hover{
    text-decoration-line: underline;
}
.abths-p2-text-box-top {
    display: block;
    padding-top: 18vh;
    padding-left: 11vw;
    border: 2px solid red;
    width: 54vw;
}
.abths-p2-text-box-top h1 {
  margin-bottom: 4vh;
  font-size: max(2.6vw, 18px);
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #000000;
}
.abths-p2-text-box-top p {
  font-size: max(0.8vw, 12px);
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #000000;
  line-height: 2.6vh;
}
.abths-p2-image-container {
    width: 100vw;
    height: 27vh;
    overflow: hidden;
}
.abths-p2-upperbox {
  height: 40vh;
  overflow: hidden;

}
.abths-p2-image-container img{
  width: 100vw;
}
</style>