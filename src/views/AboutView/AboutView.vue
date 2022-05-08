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
            <div class="tp--nv__ico">
              <svg class="m--sg"><use href="@/assets/icons/myicon.svg#s-arr-r"/></svg>
            </div>
            <div class="ShownImage">
              <img style="width: inherit;" src="@/assets/img/1-2-1.png">
            </div>
          </div>
        </div>
        <div style="display:inline-block; width: 20vw;">
          <a href="/about/team"> <img src="@/assets/icons/team@2x.png"><span>团队风采</span></a>
          <a href="/about/video"> <img src="@/assets/icons/video@2x.png"><span>远大资源简介</span></a>
          <a href="/about/video#2"> <img src="@/assets/icons/video@2x.png"><span>你鼓舞了我</span></a>
        </div>
      </div>
      <!-- 第三屏 -->    
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="abtov-p3-iframe-box"> 
          <h1><span>远大资源风景一览</span></h1>
          <div class="abtov-p3-image-container" style="border: 5px solid yellow"> 增加轮播图片</div>
        </div>
      </div>
      <!-- 第四屏 -->    
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="abtov-p3-iframe-box"> 
          <h1><span>公司优势</span></h1>
          <div class="abtov-p3-image-container">
            <ul>
              <li 
                class="abtov-p4-image-li"
                v-for="(item, i) in p4data"
                :style="{backgroundImage: 'url(' + item.background + ')', }"
                :key="i"
              >
                <div class="abtov-p4-image-box">
                  <img class="p4li-icon" :src="item.icon"> 
                  <div>              
                    <h3>{{item.name}}</h3>
                    <p>{{item.detail}}</p>
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
          <h1 ><span v-show="p5showDetail > 0">{{p5data[p5showDetail].title}}</span></h1>
          <p>{{p5data[p5showDetail].detail}}</p>
        </div>
        <div class="abtov-p5-btn">
          <span @mouseover="p5showdetail(1)" @mouseout="p5hidedetail()">使命</span>
          <span @mouseover="p5showdetail(2)" @mouseout="p5hidedetail()">价值</span>
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
      p1bgsrc: require("@/assets/background/1-1-1.png"),
      p5bgsrc: require("@/assets/background/1-1-5-1.png"),

      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      },

      p4data: [{
        icon: require("@/assets/icons/cht_one.png"),
        name: "行业规模优势",
        background: require("@/assets/img/1-1-4-1.png"),
        detail: "年生产成品17万吨，可回收利用湖南省内HW08全项的废矿物油及含油废物和HW09全项的废乳化液，也可接受外省转入废矿物油8.5万吨",
      },
      {
        icon: require("@/assets/icons/cht_two.png"),
        name: "资源转化优势",
        detail: "公司以独创技术将废矿物油提炼成润滑油基础油，综合利用率可达97%",
        background: require("@/assets/img/1-1-4-2.png"),
      },
      {
        icon: require("@/assets/icons/cht_three.png"),
        name: "自动化程度优势",
        detail: "公司拥有三条全自动、一体化生产线，生产过程采用DCS全自动控制系统，最大程度减少对一线操作员依赖",
        background: require("@/assets/img/1-1-4-3.png"),
      }],

      p5showDetail: 0,
      p5data: [{
        title: "",
        detail: "", /* 初始数据为空表示不显示*/
      },
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

    p5hidedetail() {
      this.p5showDetail = 0;
    },
  }
}
</script>

<style scoped>
a {
  display: block;
  text-decoration: none;
}
a>img{
  border:none; 
  object-fit: contain; 
  width: 1.5vw;
  margin-left: 6vw;
  margin-right: 2vw;}
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
  width: calc(100vw * 450 / 3840);
  height: calc(100vw * 140 / 3840);
}
.abtov-p1-text-box h1 {
    font-size: max(calc(100vw * 140 / 3840), 30px);
    font-family: Source Han Sans CN, "Microsoft YaHei","微软雅黑", Helvetica, sans-serif;
    font-weight: bold;
    color: #000000;
}
.abtov-p1-text-box h2 {
    font-size: max(calc(100vw * 72/3840), 14px);
    font-family: Source Han Sans CN, "Microsoft YaHei","微软雅黑", Helvetica, sans-serif;
    font-weight: 300;
    color: #000000;
    line-height: calc(100vw * 180 / 3840);
}
.abtov-p2-iframe-box {
  display: inline-block; 
  margin-left: calc(100vw * 371 / 1920);
  margin-top: 28vh;
  width: calc(100vw * (1260 - 371) / 1920);
  height: 72vh;
  border-right: 1px solid #F9BE00;
}
.imageslider {
}
.tp--nv__ico{
  display: inline-block;
  width:55px;
  height:55px;
  border:1px solid  #000;
  -webkit-border-radius:50%;
  border-radius:50%;
  overflow:hidden;
  z-index:0;
  position:relative;
  margin:40px 0 0;
  background: white;
  vertical-align: top;
}
.ShownImage {
  display: inline-block;
  width: 30vw;
  margin-left: 3vw;
  margin-top: 3vw;
  transition: opacity 1.5s ease;
  opacity: 0;
}
.m--sg{width:50%;height:50%;pointer-events:none;position:absolute;top:25%;left:25%;transition: all 0.4s ease;
}
.imageslider:hover .m--sg {
  opacity: 0;
}
.imageslider:hover .ShownImage {
  opacity: 1;
}
.abtov-p2-text-box {
  display: inline-block; 
  width: calc(100vw * 658 / 1920);
}
.abtov-p2-text-box h1 {
    font-size: max(calc(100vw * 100 / 3840), 18px);
    font-family: "Microsoft YaHei","微软雅黑", Helvetica, sans-serif;
    font-weight: bold;
    color: #000000;
    margin-bottom: 3vh;
}
.abtov-p2-text-box p {
    font-size: max(calc(100vw * 32/3840), 12px);
    font-family: "Microsoft YaHei","微软雅黑", Helvetica, sans-serif;
    font-weight: 300;
    color: #333333;
    line-height: max(calc(100vw * 48/3840), 12px);
}
.abtov-p3-iframe-box {
  display: inline-block; 
  margin-left: 10vw;
  margin-top: 20vh;
  width: 88vw;
  height: 80vh;
}
.abtov-p3-image-container {
  margin-top: 3vh;
  height: 60vh;
  width: 75vw; 
  float: left; 
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
.abtov-p4-image-li:hover {
  color: #ffffff;
  background-size: cover;
  transition: all 1s ease;
} 
.abtov-p4-image-li:hover p{
  color: #ffffff;
  background-size: cover;
  transition: all 1s ease;
}
.abtov-p4-image-box {
  margin-left: 1vw;
  border: 1px solid rgb(255, 255, 255);
  width: calc(100% - 2vw);
  height: calc(100% - 4vh);
  margin-top: 2vh;
  margin-bottom: 2vh;
  margin-right: 1vw;
}
.abtov-p4-image-box h3{
  text-align: center;
  margin-bottom: 6.2vh;
}
.abtov-p4-image-box p{
  margin-left: 2vw;
  margin-right: 2vw;
  font-size: max(2vh, 14px);
  font-family: "Source Han Sans CN";
  font-weight: 300;
  color: #666666;
  line-height: 3.3vh;
  text-align-last: center;
}
.p4li-icon {
  width: 7vw;
  margin-top: 7vh;
  margin-left: 7.5vw;
  margin-bottom: 10vh;
}
.abtov-p5-text-box {
    height: 50vh;
    width: 50vw;
    position: relative;
    top: 26vh;
    left: 10vw;
}
.abtov-p5-text-box h1 {
  margin-bottom: 4.5vh;
  width: 12vw;
  height: 4.8vh;
  font-size: max(2.6vw, 30px);
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #F6F6F6;
  line-height: 4vh;
}
.abtov-p5-text-box p {
  width: 27vw;
  height: 12vh;
  font-size: max(1.3vw, 14px);
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #FFFFFF;
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
  font-size: 1.7vw;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 13vh;
  text-align: end;
  display: inline-block;
  width: 8vw;
  vertical-align: middle;
}
.abtov-p5-btn span:hover{
  background-color: rgba(249,190,0,0.8);
}

</style>