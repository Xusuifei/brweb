<template>
  <div>
    <!-- 注释，单行或多行 -->    
    <full-page :options="options" ref="fullpage">
      <!-- 第一屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p1bgsrc + ')'}">
        <AppNavigator :invert="false"></AppNavigator>
          <div class="prodov-p1-text-box"> 
            <h1>
                产品
            </h1>
            <h2>
                优质环保
            </h2>
          </div>
      </div>
      <!-- 第二屏 -->
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="prodov-p2-iframe-box"> 
          <h1><span>主营产品</span></h1>
          <div class="prodov-p2-image-box">
            <slider class="prodov-p2-image-container" :options="slideroptions">
              <slideritem ref="slider" v-for="item in p2imglist" v-bind:key="item.name" class="prodov-p2-image">
                   <div class="abtct-p2-image-hero">
                      <h3>{{item.name}}</h3>
                      <img :src="item.img" />
                    </div>
              </slideritem>
            </slider>
            </div>
        </div>
      </div>
      <!-- 第三屏 -->
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="iframe-box">
          <el-carousel height="70vh" :interval="8000" indicator-position="outside">
            <el-carousel-item v-for="item in p3details" :key="item.name">
              <div class="prodov-p3-left-frame"> 
                  <h1><span>{{item.name}}</span></h1>
                  <el-image
                      class="imageslider"
                      :src="item.img"
                      fit="contain"
                      ></el-image>
              </div>
              <div class="prodov-p3-right-frame">
                <div class="prodov-p3-table">
                  <div class="prodov-p3-table-left">
                    <p><el-image
                    class="specimage"
                    :src="item.spec"
                    fit="contain"
                    ></el-image></p>
                  </div>
                <div class="prodov-p3-table-list">
                  <div class="prodov-p3-table-row"
                    v-for="(spec, i) in item.spec_detail"
                    :key="spec.type"
                  >      
                    <div 
                    :class="i===item.spec_detail.length-1?'prodov-p3-table-cap-last':'prodov-p3-table-cap'">
                    {{spec.type}}
                    </div>
                    <div 
                    :class="i===item.spec_detail.length-1?'prodov-p3-table-data-last':'prodov-p3-table-data'">
                    {{spec.value}}
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <!-- 第四屏-->
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p3bgsrc + ')'}">
        <AppNavigator :invert="false"></AppNavigator>
          <div class="prodov-p4-text-box"> 
            <h1>
                <span>产品值得信赖</span>
            </h1>
            <p>
                公司润滑油再生基础油75SN、150SN、350SN等产品享誉行业，其粘度指数、色度远高于行业标准（《再生润滑油基础油》2018年4月8日颁布，并在标准范围内，可按客户特定的工艺参数提供产品，值得信赖！
            </p>
          </div>
          <Copyright  />
      </div>
      <!-- 第四屏结束-->
    </full-page>
  </div>
</template>

<script>
import AppNavigator from '@/components/AppNavigator.vue';
import { slider, slideritem } from 'vue-concise-slider'
import Copyright from '@/components/Copyright.vue'; // import slider components

export default {
  components: {
    AppNavigator,
    slider,
    slideritem,
    Copyright
}
  ,
  data() {
    return {
      p1bgsrc: require("@/assets/background/2-1-1.jpg"),
      p3bgsrc: require("@/assets/background/2-1-3.jpg"),
      
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        anchors: ["prod1","prod2","prod3","prod4"]
      },
     
     slideroptions: {
       currentPage: 0,
       pagination: false,
     },

      p2imglist: [{
        name: "B75SN",
        img: require("@/assets/img/B75SN_sq.jpg"),
      },
      {
        name: "B150SN",
        img: require("@/assets/img/B150SN_sq.jpg"),
      },
      {
        name: "B250SN",
        img: require("@/assets/img/B250SN_sq.jpg"),
      },
      {
        name: "B350SN",
        img: require("@/assets/img/B350SN_sq.jpg"),
      },
      ], //end of p2imglist

      p3details: [{
        name: "B75SN", 
        img: require("@/assets/img/b75sn_ssq.jpg"),
        spec: require("@/assets/img/b75sn_spec.png"),
        spec_detail:[
          {type: "饱和烃%",
          value: "报告"},
          {type: "硫%",
          value: "报告"},
          {type: "中和值mgKOH/g",
          value: "0.03"},
          {type: "残炭%",
          value: "-"},
          {type: "蒸发损失（250℃）/h%",
          value: "-"},
          {type: "氧化安定性（150℃）min",
          value: "200"},
        ]
      },
      {
        name: "B150SN",
        img: require("@/assets/img/b150sn_ssq.jpg"),
        spec: require("@/assets/img/b150sn_spec.png"),
        spec_detail:[
          {type: "饱和烃%",
          value: "报告"},
          {type: "硫%",
          value: "报告"},
          {type: "中和值mgKOH/g",
          value: "0.03"},
          {type: "残炭%",
          value: "-"},
          {type: "蒸发损失（250℃）/h%",
          value: "17"},
          {type: "氧化安定性（150℃）min",
          value: "200"},
        ]
      },
      {
        name: "B250SN",
        img: require("@/assets/img/b250sn_ssq.jpg"),
        spec: require("@/assets/img/b250sn_spec.png"),
        spec_detail:[
          {type: "饱和烃%",
          value: "报告"},
          {type: "硫%",
          value: "报告"},
          {type: "中和值mgKOH/g",
          value: "0.03"},
          {type: "残炭%",
          value: "-"},
          {type: "蒸发损失（250℃）/h%",
          value: "13"},
          {type: "氧化安定性（150℃）min",
          value: "200"},
        ]
      },
      {
        name: "B350SN",
        img: require("@/assets/img/b350sn_ssq.jpg"),
        spec: require("@/assets/img/b350sn_spec.png"),
        spec_detail:[
          {type: "饱和烃%",
          value: "报告"},
          {type: "硫%",
          value: "报告"},
          {type: "中和值mgKOH/g",
          value: "0.05"},
          {type: "残炭%",
          value: "0.10"},
          {type: "蒸发损失（250℃）/h%",
          value: "-"},
          {type: "氧化安定性（150℃）min",
          value: "200"},
        ]
      },
      ], //end of p3details

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
.prodov-p1-text-box {
  display: table-cell; 
  padding-left: 65vw;
  padding-top: 44vh;
  width: 30vw;
  height: 30vh;
}
.prodov-p1-text-box h1 {
    font-size: max(3.65vw, 52px);
    color: #ffffff;
    font-weight: bold;
}
.prodov-p1-text-box h2 {
    font-size: max(1.88vw, 27px);
    color: #ffffff;
    line-height: 2;
}
.prodov-p3-text-box {
  display: table-cell; 
  padding-left: 11vw;
  padding-top: 31vh;
  width: 34vw;
  height: 30vh;
}
.prodov-p3-text-box h1 {
    font-size: max(2.6vw, 37px);
    color: #ffffff;
}
.prodov-p4-text-box p {
    font-size: max(1.04vw, 15px);
    color: #ffffff;
    line-height: 2;
}
.imageslider {
  margin-left: 10vw;
  width: 11vw;
  margin-bottom: 4vh;
}
.tp--nv__ico{
  display: inline-block;
  width:3vw;
  height:3vw;
  border:1px solid #000;
  -webkit-border-radius:50%;
  border-radius:50%;
  overflow:hidden;
  z-index:0;
  position:relative;
  margin:2vh 0 0;
  background: transparent;
  vertical-align: top;
}
.m--sg{
  width:0.8vw;
  pointer-events:none;
  position:absolute;
  left:1.1vw;
  transition: all 0.4s ease;
  fill: black;
  animation-duration: 2.5s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}
@keyframes slidein {
  from {
    bottom: 0%;
  }

  to {
    bottom: -110%;
  }
}
.prodov-p2-iframe-box {
  width: 89.64vw;
  height: 76vh;
  position: relative;
  top: 17.6vh;
  left: 10.36vw;
}
.prodov-p2-iframe-box h1{
  margin-bottom: 3.5vh;
  font-size: max(2.6vw, 37px);
}
.slider-item {
  justify-content: unset;
}
.el-carousel {
  height: inherit;
}
.el-carousel__item--card {
  width: 38%;
}
.prodov-p2-image {
  width: 38%;
  height: 59.63vh;
}
.prodov-p2-image-box {
  height: 70vh;
}
.abtct-p2-image-hero {
  position: relative;
  cursor: grabbing;
}
.abtct-p2-image-hero img{
  width: 30vw;
  object-fit: contain;
}
.abtct-p2-image-hero h3 {
  color: #475669;
  font-size: 14px;
  margin: 0;
  position: absolute;
  left: 2vw;
  bottom: 4vh;
}
.prodov-p3-left-frame {
  display: inline-block;
  vertical-align: top;
  width: 30vw;
  height: 60vh;
}
.prodov-p3-right-frame {
  display: inline-block;
  height: 67.5vh;
  width: 50vw;
}
.prodov-p3-left-frame h1{
  margin-left: 10vw;
  font-size: max(2.1vw, 20px);
  margin-bottom: 2vh;
}
.prodov-p3-table {
    width: 50vw;
    min-width: 480px;
    height: 56vh;
    min-height: 300px;
    display: table;
    position: relative;
    top: 5.75vh;
}
.prodov-p3-table-left {
  width: 58%;
  float: left;
  height: inherit;
  border: 1px solid #111111;
  border-left: none;
  text-align: center;
}
.prodov-p3-table-list {
    width: 40%;
    min-width: 200px;
    height: inherit;
    display: table;
    border-top: 1px solid #111111;
    border-bottom: 1px solid #111111;
    font-size: max(1.04vw, 15px);
}
.prodov-p3-table-row {
  display: table-row;
  height: 16.6%;
}
.prodov-p3-table-cap{
    display: table-cell;
    width: 67%;
    border-bottom: 1px solid #111111; 
    text-indent: 2vw;
    vertical-align: middle;
}
.prodov-p3-table-data{
    display: table-cell;
    width: 32%;
    border-bottom: 1px solid #111111; 
    text-indent: 2vw;
    vertical-align: middle;
}
.prodov-p3-table-cap-last {
    display: table-cell;
    width: 67%;
    text-indent: 2vw;
    vertical-align: middle;
}
.prodov-p3-table-data-last {
    display: table-cell;
    width: 32%;
    text-indent: 2vw;
    vertical-align: middle;
}
.specimage {
  margin-left: 2vw;
  margin-top: 3.8vh;
  height: 50vh;
}
.prodov-p4-text-box{
  display: table-cell; 
  padding-left: 10.5vw;
  padding-top: 31.6vh;
  width: 33vw;
  height: 30vh;
}
.prodov-p4-text-box h1{
  font-size: max(2.6vw, 25px);
  margin-bottom: 5vh;
  color:#fff;
}
.prodov-p4-text-box h1{
  font-size: max(2.6vw, 25px);
  line-height: 1.5;
}
</style>

<style lang="scss" scoped>
/deep/ .swiper-container-horizontal .slider-pagination-bullet-active {
  /* background: #fff none repeat scroll 0 0; */
  background: #FCB814 !important;
  opacity: 1;
}
/deep/ .swiper-container-horizontal .slider-pagination-bullet {
  background: #cccccc none repeat scroll 0 0;
}
</style>