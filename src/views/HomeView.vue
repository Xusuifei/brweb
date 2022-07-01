<template>
  <div>
    <full-page :options="options" ref="fullpage">
    <!-- 第一屏 -->
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p1bgsrc + ')'}">
        <AppNavigatorVue :invert="false"></AppNavigatorVue>
        <div class="home-p1-text-box"> 
          <h1>
              远大再生资源
          </h1>
          <h2>
              为世界根除废油污染
          </h2>
          <router-link class="btn bg-yellow" to="/about"> 
              <span>
              了解更多
              </span>
          </router-link>
        </div>
    </div>
    <!-- 第二屏 -->
    <div fluid class="section screennobg home-p2-bg">
      <AppNavigatorVue :invert="true"></AppNavigatorVue>
      <div class="product-image-container">
          <el-image
              class="product-big-image"
              :src="bigimgurl"
              lazy
              :fit="fit"
              ></el-image>
      </div>
      <div class="home-p2-right-box">
          <h1><span>主营产品</span></h1>
          <h2>{{pointedname}}<span>{{pointedproduct}}</span></h2>
          <p><router-link class="btn bg-white" to="/product#prod3"> 
              <span>
              了解更多
              </span>
          </router-link></p>
          <ul class="image-ul">
            <li 
              v-for="(item, i) in url"
              :key="i"
              @mouseenter="imgmouseover(i)"
            >
              <img class="home-p2-small-image"
                  :src="item" />
              <div class="home-p2-small-image-hero">{{product[i].name}}</div>
              <!--<div
                :class="[i == mask ? '' : 'mask']"
                v-show="i != mask"
              > </div>-->
            </li>
          </ul>
      </div>
    </div>
    <!-- 第三屏 -->
    <div class="section screenwithbg" :style="{backgroundImage: 'url(' + p3bgsrc + ')'}">
      <AppNavigatorVue :invert="false"></AppNavigatorVue>
      <div class="home-p3-frame">
          <div style="color: white;
                      display: block;
                      width: inherit;
                      padding-top: calc( 25vh );">
              <div 
                  :class="showDetail == i? 'details_li' : 'details_tp'"
                  v-for="(item, i) in detaillist"
                  :key="i"
                  @mouseover="showfull($event,i)"
                  @mouseout="hiddenfull()"
                >
                <router-link to="/about" style="color: white;">
                  <div class="p3-text-top-padding" v-show="showDetail != i"></div>
                  <div class="p3-text-text-cell">
                      <h1><span>{{item.brief}}</span></h1>
                  </div>
                  <div class="support-circle" v-show="showDetail != i">
                      <span class="support-num">+</span>
                  </div>
                  <div style="height: 1vw; display: block; width: inherit" v-show="showDetail == i"></div>
                    <div style="display: block; width:inherit">
                        <div style="display: inline-block; 
                            margin-left: 2.6vw;
                            width: 64%; vertical-align: top;
                            font-size: max(1.04vw, 15px);
                            line-height: 1.5;" 
                            v-show="showDetail == i">
                          {{detaillist[i].full}}
                        </div>
                        <div style="display: inline-block; vertical-align: top" v-show="showDetail == i">
                            <img :src="item.icon" style="margin-left: 2vw;width:2.6vw;height:auto" />
                        </div>
                    </div>
                  <div style="display: table-row"></div>
                  </router-link>
              </div>
          </div>
      </div>
    </div>
    <!-- 第四屏 -->
    <div fluid class="section screennobg homep4bg">
    <AppNavigatorVue :invert="false"></AppNavigatorVue>
      <div class="home-p4-text-box1">
          2023年拟建设完成的二期工程用地
      </div>
      <div class="home-p4-text-box2">
          <div style="margin: 2vw">
          <h1><span>远大再生资源公司</span></h1>
          <p>
            远大再生资源公司系远大科技集团控股子公司，成立于2008年，主要从事废矿物油(HW08全项)和废乳化液(HW09)全项的综合利用。公司以独创技术将工业、交通产生的废矿物油及废乳化液作为原料生产成再生润滑油基础油产品，是一家生态环境治理、废弃资源综合利用企业。      
          </p>
          </div>
      </div>
      <div style="position:relative; float: right; margin-right: 100px; top: 88.5vh; background: rgba(255,255,255,0.5);">远大再生资源公司位于湘江新区湘阴高新区鸟瞰图</div>
  </div>
    <!-- 第五屏 -->
    <div fluid class="section homep5bg">
      <AppNavigatorVue :invert="false"></AppNavigatorVue>
        <div class="home-p5-text-box"> 
          <h1>
              加入我们，未来可期
          </h1>
          <h2>
              有德有才，破格重用；有德低才，培养使用
              <br>有才低德，教育使用；有才无德，坚决不用
          </h2>
          <router-link class="btn bg-white" to="/career" target=_self> 
              <span>
              加入我们
              </span>
          </router-link>
        </div>
        <copyright-vue />
      </div>    
    </full-page>
  </div>
</template>

<script>
import AppNavigatorVue from '@/components/AppNavigator.vue';
import CopyrightVue from '@/components/Copyright.vue';

export default {
  components: { 
    AppNavigatorVue, CopyrightVue
  },
  data() {
    return {
      p1bgsrc: require("@/assets/background/0-1.jpg"),
      p3bgsrc: require("@/assets/background/0-3-1.png"),

      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        anchors: ["home1","home2","home3","home4","home5"],
        //scrollBar: true,
        onLeave: this.pageleave,
      },

      bigimgurl: require("@/assets/img/b75sn.png"), //大图的url属性url: b150snbig,
      url: [
          require("@/assets/img/b75sn.png"),
          require("@/assets/img/b150sn.png"),
          require("@/assets/img/B250SN.png"),
          require("@/assets/img/B350SN.png"),
      ],
      product: [
          {name: "B75SN",
            desc: " —— 润滑油基础油", 
            url: "/product#B75SN"}, 
          {name: "B150SN",
            desc: " —— 润滑油基础油", 
            url: "/product#B150SN"}, 
          {name: "B250SN",
            desc: " —— 润滑油基础油", 
            url: "/product#B250SN"}, 
          {name: "B350SN",
            desc: " —— 润滑油基础油", 
            url: "/product#B250SN"}, 
      ],

      mask: 0,
      clickmask: 0,
      pointedproduct: " —— 润滑油基础油",
      pointedname: "B75SN",
      producturl: "/product#B75SN",
      fit: "contain",    
      
      showDetail: 4,
      bg03list: [
          require("@/assets/background/0-3-1.png"),
          require("@/assets/background/0-3-2.jpg"),
          require("@/assets/background/0-3-3.jpg"),
      ],
      detaillist: [
          {id: "homethree-list1",
            brief: "优势",
            full: "行业规模优势，年生产成品17万吨，可回收利用湖南省内HW08全项的废矿物油及含油废物和HW09全项的废乳化液... ...", 
            icon: require("@/assets/icons/advantage.png"),}, 
          {id: "homethree-list2",
            brief: "价值",
            full: "为产废单位100% 解决环境污染和安全风险，为客户节省20% 的使用成本，为地球减少约3 吨二氧化碳排放( 每使用一吨再生油)", 
            icon: require("@/assets/icons/value.png"),}, 
          {id: "homethree-list3",
            brief: "使命",
            full: "为世界根除废油污染", 
            icon: require("@/assets/icons/mission.png"),}, 
      ],
    }
  },

  methods: {
    next() {
      // 向下滚动一页
      this.$refs.fullpage.api.moveSectionDown();
    },
    pageleave (origin, destination, direction, trigger){
      if (destination != null) {
        destination.item.classList.add('load-bg'); }
      if (origin != null && direction != null && trigger != null) {
        console.log("triggered")
      }
    },
    imgmouseover(i) {
    //将mask置为i，div使用v-show判定来显示与隐藏，
      this.mask = i;
      //this.style.backgroundColor = "white";
      this.pointedproduct = this.product[i].desc;
      this.pointedname = this.product[i].name;
      //为大图赋值当前点击的图片url地址
      this.bigimgurl = this.url[i];
      //为当前点击的mask重新赋值
      this.clickmask = i
    },
    showfull($event, i){
        this.showDetail = i; //swith position and display full description
        // change background picture
        this.p3bgsrc = this.bg03list[i];
        // change block background
    },
    hiddenfull(){
        this.showDetail = 9; //swith position and display full description
    },   
  }
}
</script>

<style scoped>
/* ------- 第一屏式样 ------*/
.home-p1-text-box {
  display: table-cell; 
  padding-left: 21vw;
  padding-top: 33vh;
}
.home-p1-text-box h1 {
    font-size: max(2.6vw, 37px);
    color: #FFFFFF;
    line-height: calc(6vw);
}
.home-p1-text-box h2 {
    font-size: max(1.04vw, 15px);
    margin-bottom: 4vh;
    color: #FFFFFF;
}
/* ------- 第2屏式样 ------*/
.product-image-container img {
  height: 75vh;
}
.home-p2-bg{
    background: linear-gradient(to right, #f6f6f6 60%, #ffffff 60%);
}
.product-image-container{
    position: relative;
    float: left;
    overflow: hidden;
    left: 23.2vw;
    top: 20%;
    height: 78vh;
    width: auto;
}
.product-big-image {
  height: 75vh;
}
.image-ul {
    display: flex;
    list-style: none;
    align-items: center;
    text-align: center;
}
.image-ul li{
  width: 10vw; 
  height: 10vw; 
  float: left; 
  background-color: transparent;
}
.image-ul li:hover {
    background-color: #F9BE00;
}
.home-p2-small-image {
  height: auto; 
  width: 28%; 
  margin-top: 2.2vh; 
}
.home-p2-small-image-hero {
  text-align: center; 
  font-size: max(1.04vw, 15px); 
  position: relative;
  bottom: 3vh;
}
.home-p2-right-box {
  margin-left: 50vw;
}
.home-p2-right-box h1 {
  margin-bottom: 2vw; 
  padding-top: 20vh;
  font-size: max(2.6vw, 37px);
}
.home-p2-right-box h2 {
  margin-bottom: 2vw;
  font-size: max(1.46vw, 21px);
}
.home-p2-right-box h2 > span {
  font-size: max(1.25vw, 18px);
}
.home-p2-right-box p {
  margin-bottom: 5vw
}
/* ------- 第3屏式样 ------*/
.home-p3-frame{
  min-width: 300px;
  width: 31vw;
  height: inherit;
  margin-left: 58vw; 
  background-color: rgba(0,0,0,0.2); 
}
.p3-text-top-padding {
  height: 2vw; 
  display: block;
}
.p3-text-text-cell {  
  display: inline-block; 
  padding-top: 1vw; 
  height: 2vw; 
  min-height: 20px; 
  width: 70%;
  margin-left: 2.6vw; 
}
.details_li {
    display: block;
    min-height: 140px;
    height: 23vh;
    width: inherit;
    font-size: 13px;
    background-color: rgba(0,0,0,0.3);
}
.details_tp {
    display: block;
    min-height: 140px;
    height: 20vh;
    width: inherit;
    font-size: 13px;
}
.details_tp h1{
  font-size: max(1.46vw, 21px);
  line-height: 1.5;
}
.details_li img{
    height: 2.5vw;
}
.details_li h1{
    font-size: max(1.46vw, 21px);
    line-height: 1.5;
}
@media (min-width: 1925px) {
    .details_li{
        font-size: 20px;
    } 
}
.support-circle{
  width:2vw;
  height:2vw;
  display: inline-block;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
}
.support-num{
  font-size: 1.5vw;
  height:2vw;
  line-height:1.25;
  display:block;
  color:#FCB815;
  text-align:center;
}
/* ------- 第4屏式样 ------*/
.homep4bg {
  background-size: contain;
  display: block;
}
.homep4bg.load-bg {
  background: linear-gradient(to top, #fff 16%, rgba(255,255,255,0.0) 16%), url('@/assets/img/0-4.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
}
.home-p4-text-box1 {
    position: absolute;
    min-width: 400px;
    width: 20vw;
    height: max(1.5vw, 20px);
    font-size: max(1.25vw, 18px);
    color: #FFFFFF;
    line-height: 2;
    left: 3vw;
    top: 28vh
}
.home-p4-text-box2 {
    position: absolute;
    width: 21vw;
    min-width: 300px;
    height: 22.5vw;
    background: rgba(246,246,246,0.9);
    opacity: 0.9;
    left: 10.41vw;
    bottom: 10vh;
}
.home-p4-text-box2 h1 {
  font-size: max(1.46vw, 21px);
  padding-bottom: 3vh;
}
.home-p4-text-box2 p{
  font-size: max(1.04vw, 15px);
  letter-spacing: 0.2em;
  line-height: 1.5;
  text-align: justify;
}
/* ------- 第5屏式样 ------*/
.homep5bg {
  background-size: cover;
}
.homep5bg.load-bg {
  background: url('@/assets/background/0-5.png');
  background-repeat: no-repeat;
  background-position-y:center;
  background-size: cover;
}
.home-p5-text-box {
  display: table-cell; 
  padding-left: calc(100vw * 500 / 3840);
  padding-top: calc(100vw * 522 / 3840);
}
.home-p5-text-box h1 {
    font-size: max(2.6vw, 37px);
    color: #FFFFFF;
    line-height: calc(100vw * 0.06);
}
.home-p5-text-box h2 {
    font-size: max(1.04vw, 15px);
    margin-bottom: 4vh;
    color: #FFFFFF;
}
</style>