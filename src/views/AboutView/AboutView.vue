<template>
  <div>
    <!-- 注释，单行或多行 -->    
    <full-page :options="options" ref="fullpage">
      <!-- 第一屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p1bgsrc + ')'}">
        <AppNavigator :invert="false"></AppNavigator>
          <div class="abtov-p1-text-box"> 
            <h1>
                概述
            </h1>
            <h2>
                关于远大资源
            </h2>
          </div>
      </div>
      <!-- 第二屏 -->    
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="abtov-p2-iframe-box"> 
          <div class="abtov-p2-text-box">
            <h1>
                <span>远大再生油资源公司</span>
            </h1>
            <p>
                远大科技集团有限公司是1988年以3万元起家的中国民营企业，创业以来开发了上百种高科技产品，从未模仿过同行业技术。远大使命是“为了人类未来：用原始创新的节能、耐久科技，保护地球家园。用原始创新的洁净、安全科技，保护人类生命”。远大总部设于长沙，产品覆盖80多国，
                <br>远大再生油资源公司系远大科技集团控股子公司，成立于2008年，主要从事废矿物油(HW08全项) 和废乳化液(HW09) 全项的综合利用。公司以独创技术将工业、交通产生的废矿物油及废乳化液作为原料生产成再生润滑油基础油产品，是一家生态环境治理、废弃资源综合利用企业，公司设于长沙湘江新区湘阴工业园
                <br>产品：润滑油基础油75SN、150SN、250SN、350SN，尾油，抽出油
            </p>
          </div>
          <div class="imageslider">
            <div class="ShownImage">
              <img style="width: inherit;" src="@/assets/img/1-2-1.jpg">
            </div>
          </div>
        </div>
        <div style="display:inline-block; width: 20vw; vertical-align: text-bottom; padding-bottom: 3vh">
          <router-link to="/about/team"> <img src="@/assets/icons/team@2x.png"><span>团队风采</span></router-link>
          <router-link to="/about/video#video1"> <img src="@/assets/icons/video@2x.png"><span>远大资源简介</span></router-link>
          <router-link to="/about/video#video2"> <img src="@/assets/icons/video@2x.png"><span>你鼓舞了我</span></router-link>
        </div>
      </div>
      <!-- 第三屏 -->    
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="abtov-p3-iframe-box"> 
          <h1><span>远大资源风景一览</span></h1>
          <div class="abtov-p3-image-container" >
            <slider ref="slider" :options="slideroptions">
              <slideritem class="abtov-p3-image" v-for="item in p3data" :key="item.title">
              <div>
                <img :src="item.img" />
                <p class="abtov-p3-float-img-hero">{{item.title}}</p>
              </div></slideritem>
              <!-- Set loading -->
              <div slot="loading">loading...</div>
            </slider>
          </div>
        </div>
      </div>
      <!-- 第四屏 -->    
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="abtov-p3-iframe-box"> 
          <h1><span>公司优势</span></h1>
          <div class="abtov-p4-image-container">
            <ul>
              <li 
                class="abtov-p4-image-li"
                v-for="(item, i) in p4data"
                :style="{backgroundImage: 'url(' + item.background + ')', }"
                :key="i"
              >
                <div class="abtov-p4-licover">
                  <p style="height: 2vh"></p>
                  <div class="abtov-p4-image-box">
                    <svg class="p4li-icon" v-show="i==0"><use href="@/assets/icons/myicon.svg#cht-one" /></svg> 
                    <svg class="p4li-icon" v-show="i==1"><use href="@/assets/icons/myicon.svg#cht-two" /></svg> 
                    <svg class="p4li-icon" v-show="i==2"><use href="@/assets/icons/myicon.svg#cht-three" /></svg> 
                    <div>              
                      <h3>{{item.name}}</h3>
                      <p>{{item.detail}}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 第五屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p5bgsrc + ')'}">
        <AppNavigator :invert="false"></AppNavigator>
        <div class="abtov-p5-text-box">
          <h1 ><span>{{p5data[p5showDetail].title}}</span></h1>
          <p>{{p5data[p5showDetail].detail}}</p>
        </div>
        <div class="abtov-p5-btn">
          <span :class="p5showDetail == 0? 'active-button' : 'inactive-button'" @mouseover="p5showdetail(0)">使命</span>
          <span :class="p5showDetail == 1? 'active-button' : 'inactive-button'" @mouseover="p5showdetail(1)">价值</span>
        </div>
        <copyright-vue />
      </div>
    </full-page>
  </div>
</template>

<script>
import AppNavigator from '@/components/AppNavigator.vue';
import CopyrightVue from '@/components/Copyright.vue';
import { slider, slideritem } from 'vue-concise-slider' // import slider components

export default {
  components: {
    AppNavigator, CopyrightVue, slider, slideritem, //Carousel, Slide,
  },
  data() {
    return {
      p1bgsrc: require("@/assets/background/1-1-1.jpg"),
      p5bgsrc: require("@/assets/background/0-3-3.jpg"),

      options: {
        licenseKey: "gplv3-license",
      },

      slideroptions: {
       currentPage: 0,
       pagination: false,
     },

      p3data: [{
        img: require("@/assets/img/1-1-3-1.jpg"),
        title: "远大再生资源公司位于湘江新区湘阴高新区鸟瞰图"
      },{
        img: require("@/assets/img/1-1-3-2.jpg"),
        title: "远大再生资源公司厂房"
      },{              
        img: require("@/assets/img/1-1-3-3.jpg"),
        title: "远大再生资源公司厂房" 
      },{              
        img: require("@/assets/img/1-1-3-4.jpg"),
        title: "远大再生资源公司办公区域"
      }],

      p4data: [{
        name: "行业规模优势",
        background: require("@/assets/img/1-1-4-1.jpg"),
        detail: "年生产成品17万吨，可回收利用湖南省内HW08全项的废矿物油及含油废物和HW09全项的废乳化液，也可接受外省转入废矿物油8.5万吨",
      },
      {
        name: "资源转化优势",
        detail: "公司以独创技术将废矿物油提炼成润滑油基础油，综合利用率可达97%",
        background: require("@/assets/img/1-1-4-2.jpg"),
      },
      {
        name: "自动化程度优势",
        detail: "公司拥有三条全自动、一体化生产线，生产过程采用DCS全自动控制系统，最大程度减少对一线操作员依赖",
        background: require("@/assets/img/1-1-4-3.jpg"),
      }],

      p5showDetail: 0,
      p5data: [
      {
        title: "公司使命",
        detail: "为世界根除废油污染", 
      },
      {
        title: "公司价值",
        detail: "为产废单位100%解决环境污染和安全风险，为客户节省20%的使用成本，为地球减少约3吨二氧化碳排放( 每使用一吨再生油）", 
      }
      ],
    }
  },
  methods: {
    next() {
      // 向下滚动一页
      this.$refs.fullpage.api.moveSectionDown();
    },

    p5showdetail(i) {
        this.p5showDetail = i;
    },
  }
}
</script>

<style scoped>
a {
  display: block;
  text-decoration: none;
  color: #F9BE00;
}
a>img{
  border:none; 
  object-fit: contain; 
  width: 1.5vw;
  margin-left: 6vw;
  margin-right: 2vw;
}
a:link{
  text-decoration: none;
  border: none;
  color:#F9BE00;
  line-height: 1.5vw;
  margin-bottom: 4vh;
}
a>span{
  vertical-align: top;
}
.abtov-p1-text-box {
  display: table-cell; 
  padding-left: 30vw;
  padding-top: 39vh;
  width: 25vw;
  height: 20vh;
}
.abtov-p1-text-box h1 {
    font-size: max(3.65vw, 52px);
    font-weight: bold;
    color: #000000;
}
.abtov-p1-text-box h2 {
    font-size: max(1.88vw, 27px);
    color: #000000;
    line-height: calc(100vw * 180 / 3840);
}
.abtov-p2-iframe-box {
  display: inline-block; 
  margin-left: 11vw;
  margin-top: 20vh;
  width: 62vw;
  height: 80vh;
  border-right: 1px solid #F9BE00;
  overflow: hidden;
}
.ShownImage {
  display: inline-block;
  width: 56vw;
  margin-top: 3vw;
  transition: opacity 1.5s ease;
  height: 20vh;
}
.abtov-p2-text-box {
  display: inline-block; 
  width: 56vw;
}
.abtov-p2-text-box h1 {
    font-size: max(2.6vw, 37px);
    font-weight: bold;
    color: #000000;
    margin-bottom: 3vh;
}
.abtov-p2-text-box p {
    font-size: max(1.04vw, 15px);
    color: #333333;
    line-height: 1.6;
    text-align: justify;
}
.abtov-p3-iframe-box {
  display: inline-block; 
  margin-left: 10vw;
  margin-top: 20vh;
  width: 90vw;
  height: 80vh;
}
.abtov-p3-iframe-box h1 {
  font-size: max(2.6vw, 37px);
}
.abtov-p3-image-container {
  margin-top: 3vh;
  height: 60vh;
  width: 90vw; 
  float: left; 
  position: relative;
}
.abtov-p4-image-container {
  margin-top: 3vh;
  height: 60vh;
  width: 75vw; 
  float: left; 
  position: relative;
}
.abtov-p3-float-img-hero{
  position: absolute;
  bottom: 3vh;
  height: 2em;
  font-size: max(1.25vw, 18px);
  color: #fff;
  text-indent: 1.5em;
}
.abtov-p3-image {
  width: 52%;
  justify-content: unset;
}
.abtov-p3-image img{
  width: min(93.11vh, 46vw);
}
.abtov-p4-image-li {
  background-size: 0px;
  border: 1px solid #cccccc;
  list-style: none;
  color: #000000;
  height: 60vh;
  width: 33%;
  float: left;
}
.abtov-p4-licover {
  height: 60vh;
}
.abtov-p4-image-li:hover {
  color: #ffffff;
  background-size: cover;
  transition: all 0.2 ease;
} 
.abtov-p4-image-li:hover p{
  color: #ffffff;
  background-size: cover;
  transition: all 0.1s ease;
}
.abtov-p4-image-li:hover .p4li-icon {
  color: #fff;
}
.abtov-p4-image-li:hover .abtov-p4-licover {
  background-color: rgba(0,22,85,0.3);
}

.abtov-p4-image-box {
  margin-left: 1vw;
  border: 1px solid rgb(255, 255, 255);
  width: calc(100% - 2vw);
  height: calc(100% - 4vh);
  margin-bottom: 2vh;
  margin-right: 1vw;
}
.abtov-p4-image-box h3{
  text-align: center;
  margin-bottom: 3.2vh;
  font-size: max(1.56vw, 22px);
}
.abtov-p4-image-box p{
  margin-left: 2vw;
  margin-right: 2vw;
  font-size: max(1.04vw, 15px);
  color: #666666;
  line-height: 3.3vh;
  text-align-last: center;
}
.p4li-icon {
  width: 100%;
  margin-top: 3vh;
  margin-bottom: 5vh;
  color: #F9BE00;
}
.abtov-p5-text-box {
    height: 50vh;
    width: 50vw;
    position: relative;
    top: 24vh;
    left: 10vw;
}
.abtov-p5-text-box h1 {
  margin-bottom: 4.5vh;
  width: 12vw;
  height: 4.8vh;
  font-size: max(2.6vw, 37px);
  color: #000;
  line-height: 4vh;
}
.abtov-p5-text-box p {
  width: 22vw;
  height: 12vh;
  font-size: max(1.25vw, 18px);
  color: #000;
  line-height: 4vh;
}
.abtov-p5-btn {
  height: 13vh;
  width: 20vw;
  margin-left: 69vw;
  margin-top: 25vh;
}
.abtov-p5-btn span{
  border: 1px solid #F9BE00;
  letter-spacing: 1.5vw;
  height: inherit;
  font-size: max(1.88vw, 27px);
  font-weight: 400;
  line-height: 13vh;
  text-align: end;
  display: inline-block;
  width: 8vw;
  vertical-align: middle;
}
</style>