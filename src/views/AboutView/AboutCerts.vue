<template>
  <div>
    <!-- 注释，单行或多行 -->    
    <full-page :options="options" ref="fullpage">
      <!-- 第一屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p1bgsrc + ')'}">
        <AppNavigator :invert="true"></AppNavigator>
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
            <div style="margin-top: calc(min(88vh, 50vw) * 0.345 - 15vh );">
              <div class="abtct-p2-btn">
                <div>
                  <span :class="radio1 == p2data[0].title? 'active-button' : 'inactive-button'" @mouseover="over(p2data[0].title)">资质</span>
                  <span :class="radio1 == p2data[1].title? 'active-button' : 'inactive-button'" @mouseover="over(p2data[1].title)">荣誉</span>
                </div>
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
          </div>
          <div class="abtct-p2-image-box">
            <el-image
              class="el-image"
              :src="p2fullimage"
              :fit="fit"
            ></el-image>
          </div>
        </div>
        <copyright-vue :invert="true" />
      </div>
    </full-page>
  </div>
</template>

<script>
import AppNavigator from '@/components/AppNavigator.vue';
import CopyrightVue from '@/components/Copyright.vue';

export default {
  components: {
    AppNavigator, CopyrightVue}
  ,
  data() {
    return {
      p1bgsrc: require("@/assets/background/1-2-1.jpg"),
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      },
      
      p2data: [{
        title: "资质",
        lists: [{
            name: "危险废物经营许可证",
            fullimage: require("@/assets/img/hazzardgoodscerts.jpg"),
          },
          {
            name:  "危险废物经营许可证(1)",
            fullimage: require("@/assets/img/hazzardwastescerts.jpg"),
          },
          {
            name: "资源综合利用认定证书",
            fullimage: require("@/assets/img/recyclecerts.jpg"),
          },
          {
            name: "排污许可证",
            fullimage: require("@/assets/img/draincerts.jpg"),
          },
        ]
      },
      {
        title: "荣誉",
        lists: [{
          name: "湘江新区百强企业",
          fullimage: require("@/assets/img/Top100.jpg"),
        }] // End of 
      }], //End of p2data
      
      radio1: "资质",
      p2fullimage: require("@/assets/img/hazzardgoodscerts.jpg"),

      } // End of Return
    }, // End of Data

  methods: {
    next() {
      // 向下滚动一页
      this.$refs.fullpage.api.moveSectionDown();
    },
    over(row){
      this.radio1=row;
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
  padding-left: 29vw;
  padding-top: 24vh;
  width: calc(100vw * 450 / 3840);
  height: calc(100vw * 140 / 3840);
}
.abtct-p1-text-box h1 {
    font-size: max(3.65vw, 52px);
    font-weight: bold;
    color: #000;
}
.abtct-p1-text-box h2 {
  font-size: max(1.88vw, 27px);
  color: #000;
  line-height: 4.69vw;
}
.abtct-p2-iframe-box {
  width: 80vw;
  height: 72vh;
  position: relative;
  top: 23vh;
  left: 18vw;
}
.abtct-p2-text-box {
  display: table-cell;
  width: 28vw;
  vertical-align: top;
}
.abtct-p2-image-box {
  display: table-cell; 
  width: min(88vh, 50vw);
}
.abtct-p2-btn {
  height: 5vh;
  font-size: 1.7vw;
  color: #F9BE00;
  line-height: 5vh;
  display: inline-block;
  font-size: max(1.25vw, 18px);
}
.abtct-p2-btn span{
    padding: 1vh 2vw;
    font-size: min(1.5vw,2.7vh);
    letter-spacing: 0.5vw;
    border: 1px solid #f9BE00;
}
.abtct-p2-btn ul{
  margin-top: 8vh;
  list-style: none;
  position: relative
}
.abtct-p2-btn li{
  position: relative;
  padding-left: 2.5vw;
  font-size: max(1.25vw, 18px);
  color: #333333;
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