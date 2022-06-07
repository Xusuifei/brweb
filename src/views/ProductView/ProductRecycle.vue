<template>
  <div>
    <!-- 注释，单行或多行 -->    
    <full-page :options="options" ref="fullpage">
      <!-- 第一屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p1bgsrc + ')', backgroundPositionY: 'bottom'}">
        <AppNavigator :invert="true"></AppNavigator>
          <div class="prodrs-p1-text-box"> 
            <h1>
                原料
            </h1>
            <h2>
                原料回收
            </h2>
          </div>
      </div>
      <!-- 第二屏 -->
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="prodrs-p2-leftbox">
              <div >
                <div class="prodrs-p2-text">
                    <h1><span>{{p2list[p2active].title}}</span></h1>
                    <p>{{p2list[p2active].detail}}</p>
                </div>
                <p class="prodrs-p2-button-container">
                  <span :class="p2active == 0? 'active-button' : 'inactive-button'" @mouseover="p2showdetail(0)">&lt;</span>
                  <span :class="p2active == 1? 'active-button' : 'inactive-button'" @mouseover="p2showdetail(1)">&gt;</span>
                </p>
              </div>

        </div>
        <div class="prodrs-p2-rightbox">
              <p><el-image :src="p2list[p2active].imgpath" fit="contain">
              </el-image></p>
        </div>
      </div>
      <!-- 第三屏 -->
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="iframe-box">
          <h1><span>原料</span></h1>
          <div class="prodrs-p3-images-row">
            <slider :options="slideroptions">
              <slideritem v-for="item in p3list" :key="item.title" ref="slider" class="prodrs-p3-image">
                <div>
                <img :src="item.img"/>
                <p>{{item.title}}</p>
                </div>
              </slideritem>
            </slider>
          </div>
          <div>注：根据《危险废物经营许可证管理办法》第一章第三条规定，“领取危险废物收集经营许可证的单位，只能从事机动车维修活动中产生的废矿物油的收集经营活动”</div>
        </div>
      </div>
      <!-- 第四屏-->
      <div fluid class="section">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="prodrs-p2-leftbox">
              <div >
                <div class="prodrs-p2-text">
                    <h1><span>{{p4list[p4active].title}}</span></h1>
                    <p>{{p4list[p4active].detail}}</p>
                </div>
                <p class="prodrs-p2-button-container">
                  <span :class="p4active == 0? 'active-button' : 'inactive-button'" @mouseover="p4showdetail(0)">&lt;</span>
                  <span :class="p4active == 1? 'active-button' : 'inactive-button'" @mouseover="p4showdetail(1)">&gt;</span>
                </p>
              </div>
        </div>
        <div class="prodrs-p4-right-frame">
            <el-image :src="p4list[p4active].imgpath" fit="contain" class="prodrs-p4-rightbox">
                  </el-image>
            <p>{{p4list[p4active].imgdesc}}</p>
        </div>
        <Copyright :invert="true" />
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
      p1bgsrc: require("@/assets/background/2-2-1.jpg"),
      
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      },

     slideroptions: {
       currentPage: 0,
       pagination: false,
     },

      p2active: 0,
      p2list: [{
          title: "回收",
          detail: "我国废矿物油的产生涉及到国民经济的各个行业，主要来自于机械设备、动力装置、汽车船舶、运输设备等，由于各地产废单位发展各有差异，规模也千差万别。大中型企业在废矿物油处理方面管理较规范，但小微企业缺少监管力度，导致危险废物行业收集管理混乱、回收处理方式不规范、具有危害环境的风险，这些都危害着整个废矿物油回收的市场环境，如何改善其市场环境是行业内所有企业单位应思考。\r\n\r\n远大再生油资源公司拟在未来2~3年内应用“智能化管理”，采用物联网、大数据和云计算等技术，结合自身优质资源，将互联网技术和传统产业链完美结合，形成独特的危废处理数字化管理体系，减少中间环节，推动回收产业升级，实现危废收集、运输、储存合理布局，提高工作效率和经营效率，净化回收市场。",
          imgpath: require("@/assets/img/2-2-2-1.jpg"),
        },{
          title: "智能管理",
          detail: "将产废企业、运输单位和回收单位利用互联网技术动态联系起来。在收集环节中自动生成订单信息，运输过程中实现实时监控和GPS定位功能，通过平台统一进行调度，提供运输中智能路线规划并进行安全提醒。本系统为产废企业、运输单位提供了标准化、规范化、信息化、人性化的危废收运一站式服务，提高了危险废物转移、处理工作等效率，降低了环境污染率，实现了系统内用户互利共赢局面",
          imgpath: require("@/assets/img/2-2-2-2.jpg"),
        }
      ], //end of p2imglist
      p3list: [{
        title: "社会源废油",
        img: require("@/assets/img/shyfy.jpg"),
      },{
        title: "工业源废油",
        img: require("@/assets/img/gyyfy.jpg"),
      },{
        title: "含油废水",
        img: require("@/assets/img/hyfsh.jpg"),
      },{
        title: "废乳化液",
        img: require("@/assets/img/frhuaye.jpg"),
      },{
        title: "油泥及含油废物",
        img: require("@/assets/img/ynjyfw.jpg"),
      }],

      p4active: 0,
      p4list: [
        {
          title: "废油利用",
          detail: "采用真空负压蒸馏技术，将废矿物油在高温真空负压的环境下分离其中密度不同的物质，通过双溶剂精制技术对这些物质进行再次加工，进一步分离杂质，最后得到的就是不同型号的润滑油基础油远大再生油资源公司采用的DCS全自动控制系统，通过远程控制台对生产线上的设备进行远程操控和管理，生产现场不需要人员值守，最大程度减少对人员的依赖，避免人员操作失误，确保了生产设备稳定运行",
          imgpath: require("@/assets/img/2-2-4-1.png"),
          imgdesc: "远大再生基础油工艺流程图"
        },
        {
          title: "油泥及含油废物利用",
          detail: "采用真空回转蒸馏技术，油泥或含油废物在高温负压环境下，进行连续固液分离，产生废矿物油和一般固废。废油作为再生基础油原料，生产再生基础油及副产品，一般固废作为不同用途的建筑材料",
          imgpath: require("@/assets/img/2-2-4-2.png"),
          imgdesc:  "远大油泥利用工艺流程图",
        },
      ] //end of p3details
    } // End of Return
  }, // End of Data

  methods: {
    next() {
      // 向下滚动一页
      this.$refs.fullpage.api.moveSectionDown();
    },

    p2showdetail(i) {
      if(i<2 && i>=0){
        this.p2active = i;
      } else {
        this.p2active = 0;
      }
    },
    p4showdetail(i) {
      if(i<2 && i>=0){
        this.p4active = i;
      } else {
        this.p4active = 0;
      }
    }
  }
}

</script>

<style scoped>
.iframe-box {
  width: 90vw;
}
.iframe-box h1{ 
  font-size: max(2.6vw, 37px);
}
.prodrs-p1-text-box {
  display: table-cell; 
  padding-left: 71.5vw;
  padding-top: 24vh;
  width: 30vw;
  height: 30vh;
}
.prodrs-p1-text-box h1 {
    font-size: max(3.6vw, 30px);
    font-weight: bold;
    color: #000;
}
.prodrs-p1-text-box h2 {
    font-size: max(1.8vw, 14px);
    color: #000;
    line-height: 3.6vw;
}
.prodrs-p2-leftbox {
  width: 49.5vw;
  height: 98vh;
  display: inline-flex;
  vertical-align: top;
}
.prodrs-p2-text{
  margin-left: 10.6vw;
  padding-top: 28.1vh;
  width: 33vw;
  height: 55vh;
  display: block;
  overflow: hidden;
}
.prodrs-p2-rightbox {
  width: 50vw;
  display: inline-flex;
  height: inherit;
  text-align:end;
  overflow: hidden;
}
.prodrs-p2-rightbox {
  margin-top: max(calc(88vh - 50vw), 11.5vh);
  width: 50vw;
  height: min(50vw, 88.5vh);
}
.prodrs-p2-text h1{
  font-size: max(2.6vw, 25px);
  margin-bottom: 4vh;
}
.prodrs-p2-text p{
  margin-left: 0px;
  font-size: max(1.04vw, 15px);
  line-height: 1.5;
  white-space: pre-wrap;
  text-align: justify;
}
.prodrs-p2-button-container{
  margin-left: 10.6vw;
  margin-top: 2vh;
  font-size: max(1.04vw, 15px);
}
.prodrs-p2-button-container span{
  border: 1px solid #F9BE00;
  padding: 0.8vh 0.7vw;
}
.prodrs-p3-image {
  width: 28%;
  justify-content: unset;
}
.prodrs-p3-image p{
  color: #111111;
  line-height: 3;
  text-align: center;
  font-size: max(1.25vw, 18px);
}
.prodrs-p3-image img{
  width: 20vw;
  cursor:-webkit-grabbing;
}
.prodrs-p3-images-row {
  height: 60.7vh;
  align-content: start;
}

.prodrs-p4-right-frame{
  padding-left: 4vw;
  margin-top: max(calc(88vh - 50vw), 17.3vh);
  width: min(29.1vw, 51vh);
  height: 70vh;
  display: inline-block;
}
.prodrs-p4-right-frame p{
  margin-top: 3vh;
  text-align: center;
}
.prodrs-p4-rightbox {
  width: min(29.1vw, 51vh);
  height: fit-content;
  display: block;
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