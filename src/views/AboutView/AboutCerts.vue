<template>
  <div>
    <!-- 注释，单行或多行 -->    
    <full-page :options="options" ref="fullpage">
      <!-- 第一屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p1bgsrc + ')'}">
        <AppNavigator :invert="false"></AppNavigator>
          <div class="abtct-p1-text-box"> 
            <h1>
                资质
            </h1>
            <h2>
                专业能力
            </h2>
          </div>
      </div>
      <!-- 第二屏 -->    
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="abtct-p2-iframe-box"> 
          <div class="abtct-p2-text-box">
            <div class="abtct-p2-btn">
              <el-radio-group v-model="radio1">
                 <el-radio-button v-for="item in p2data" v-bind:key="item.title" :label="item.title">
                    <span v-on:mouseover="over($event)"
                    :id="item.title">{{item.title}}</span>
                    </el-radio-button>
              </el-radio-group>
              <div v-for="item in p2data" v-bind:key="item.title"
              >
                <ul v-show="item.title == radio1">
                  <li 
                    v-for="itemli in item.lists" 
                    v-bind:key="itemli.name" 
                    @mouseover="showImage(itemli.fullimage)">{{itemli.name}} {{i}}
                  </li>
                </ul>
              </div>
            </div>   
          </div>
          <div class="abtct-p2-image-box">
            <el-image
              class="el-image"
              :src="p2fullimage"
              :fit="fit"
            ></el-image>
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
      p1bgsrc: require("@/assets/background/1-2-1.png"),
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      },
      
      p2data: [{
        title: "资质",
        lists: [{
            name: "危险废物经营许可证",
            fullimage: require("@/assets/img/危险废物经营许可证.png"),
          },
          {
            name: "资源综合利用认定证书",
            fullimage: require("@/assets/img/资源综合利用认定证书.png"),
          },
          {
            name:  "危险废物经营许可证(1)",
            fullimage: require("@/assets/img/危险废物经营许可证 (1).png"),
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
      }], //End of p2data
      
      radio1: "资质",
      p2fullimage: require("@/assets/img/危险废物经营许可证 (1).png"),

      } // End of Return
    }, // End of Data

  methods: {
    next() {
      // 向下滚动一页
      this.$refs.fullpage.api.moveSectionDown();
    },
    over(row){
      document.getElementById(row.target.id).click();
    },
    showImage(imgpath){
      console.log("move to" + imgpath);
      this.p2fullimage =  imgpath;
    }
  }
}

</script>

<style scoped>
.screennobg {
  background: linear-gradient(to right, #ffffff 50%,#F6F6F6 50%)
}
.abtct-p1-text-box {
  display: table-cell; 
  padding-left: 21vw;
  padding-top: 26vh;
  width: calc(100vw * 450 / 3840);
  height: calc(100vw * 140 / 3840);
}
.abtct-p1-text-box h1 {
    font-size: max(calc(100vw * 140 / 3840), 30px);
    font-family: Source Han Sans CN, "Microsoft YaHei","微软雅黑", Helvetica, sans-serif;
    font-weight: bold;
    color: #ffffff;
}
.abtct-p1-text-box h2 {
    font-size: max(calc(100vw * 72/3840), 14px);
    font-family: Source Han Sans CN, "Microsoft YaHei","微软雅黑", Helvetica, sans-serif;
    font-weight: 300;
    color: #ffffff;
    line-height: calc(100vw * 180 / 3840);
}
.abtct-p2-iframe-box {
  width: 60vw;
  height: 72vh;
  position: relative;
  top: 23vh;
  left: 18vw;
}
.abtct-p2-text-box {
  display: inline-block;
  width: 21vw;
  height: 50vh;
  vertical-align: top;
  margin-top: 10vh;
}
.abtct-p2-image-box {
  display: inline-block; 
  width: 71.8vh;
  height: 48.8vh;
}
.abtct-p2-btn {
  height: 5vh;
  font-size: 1.7vw;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #F9BE00;
  line-height: 5vh;
  display: inline-block;
}
.abtct-p2-btn span{
    padding: 12px 20px;
    font-size: 1vw;
    font-family: Source Han Sans CN;
    font-weight: 400;
}
.abtct-p2-btn ul{
  margin-top: 3vh;
  list-style: none;
  position: relative
}
.abtct-p2-btn li{
  position: relative;
  padding-left: 2.5vw;
  font-size: max(calc(100vw * 24 / 1920),12px);
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #333333;
  line-height: 40px;
}
.abtct-p2-btn li:hover{
  padding-left: 4vw;
}
.abtct-p2-btn li::before{
    position: relative;
    content: '';
    height: .6em;
    width: .6em;
    background: #F9BE00;
    display: block;
    position: absolute;
    transform: rotate(45deg);
    top: .6em;
    left: 0;
}
.el-radio-button:first-child .el-radio-button__inner{
  padding: 12px 0px;
}
.abtct-p2-btn span:hover{
  background-color: rgba(249,190,0,0.8);
}
</style>