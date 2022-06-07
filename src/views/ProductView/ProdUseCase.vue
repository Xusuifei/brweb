<template>
  <div>
    <!-- 注释，单行或多行 -->    
    <full-page :options="options" ref="fullpage">
      <!-- 第一屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p1bgsrc + ')'}">
        <AppNavigator :invert="false"></AppNavigator>
          <div class="produc-p1-text-box"> 
            <h1>
                案例
            </h1>
            <h2>
                环境治理
            </h2>
          </div>
      </div>
      <!-- 第二屏 -->    
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="produc-p2-iframe-box"> 
          <!-- carousel start-->
          <el-carousel height="85vh" :interval="8000" arrow="always">
            <el-carousel-item v-for="item in p2data" :key="item.name">
              <div class="produc-p2-leftbox">
                <h1><span>{{item.title}}</span></h1>
                <h3>{{item.name}}</h3>
                <p>{{item.desc}}</p>
                <div class="floating-placeholder"></div>
              </div>
              <div class="produc-p2-rightbox">
                <img :src="item.fullimage" class="prodrs-p2-rightimage">
              </div>
              <div class="produc-p2-float-img">
                <div v-for="smimage in item.smallimage" :key="smimage.name" class="produc-p2-float-img-container">
                  <img :src="smimage.img">
                  <div class="produc-p2-float-img-hero">{{smimage.hero}}</div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
          <!-- carousel end-->
        </div>
        <Copyright :invert="true" />
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
      p1bgsrc: require("@/assets/background/2-3-1.jpg"),
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      },
      
      p2data: [{
        title: "生态环境治理案例",
        name: "案例一",
        desc: "形成原因：某单位在关停时填埋的油泥，20年后城市开发被挖掘出来\r\n危废类型：油泥，Hw08\r\n危废数量：883.78吨\r\n服务内容：集中回收、处理，现场修复\r\n治理修复时间：25天",
        smallimage: [{
            hero: "处理前",
            img: require("@/assets/img/2-3-2-0-a.jpg"),
          },{
            hero: "处理中",
            img: require("@/assets/img/2-3-2-0-b.jpg"),
          },{
            hero: "处理中",
            img: require("@/assets/img/2-3-2-0-c.jpg"),
          }
        ],
        fullimage: require("@/assets/img/2-3-2-0.jpg"),
      },{
        title: "生态环境治理案例",
        name: "案例二",
        desc: "形成原因：某单位被关停时未及时处理的油泥\r\n危废类型：油泥，含油废水，Hw08\r\n危废数量：4157.48吨\r\n服务内容：集中回收、处理，现场修复\r\n治理修复时间：45天",
        smallimage: [{
            hero: "处理前",
            img: require("@/assets/img/2-3-2-1-a.jpg"),
          },{
            hero: "处理中",
            img: require("@/assets/img/2-3-2-1-b.jpg"),
          },{
            hero: "处理中",
            img: require("@/assets/img/2-3-2-1-c.jpg"),
          }
        ],
        fullimage: require("@/assets/img/2-3-2-1.jpg"),
      }],
    }
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
.produc-p1-text-box {
  display: table-cell; 
  padding-left: 72.1vw;
  padding-top: 25.6vh;
  width: 11vw;
  height: 14vh;
}
.produc-p1-text-box h1 {
    font-size: max(3.65vw, 52px);
    color: #000;
    font-weight: bold;
}
.produc-p1-text-box h2 {
    font-size: max(1.88vw, 27px);
    color: #000;
}
 .produc-p2-iframe-box {
   position: relative;
   top:11.85vh;
   height: 88.15vh;
   width: 100vw;
 }
 .produc-p2-leftbox {
    display: table-cell;
    width: 39.5vw;
    height: 60vh;
    padding-left: 10.5vw;
    vertical-align: middle;
}
.produc-p2-leftbox h1{
  font-size: max(2.6vw, 37px);
}
.produc-p2-leftbox h3{
  margin-top: 4vh;
  margin-bottom: 2vh;
  font-size: max(1.25vw, 18px);
}
.produc-p2-leftbox p{
  text-align: left;
  white-space: pre-wrap;
  line-height: 1.5;
  font-size: max(1.04vw, 15px);
}
.produc-p2-rightbox{
  display: table-cell;
  width: 50vw;
  height: inherit;
  overflow: hidden;
  vertical-align: middle;
}
.floating-placeholder {
  padding-top: 10vh;
  height: 20.38vh;
}
.prodrs-p2-rightimage {
  width: min(88.88vh, 50vw);
  object-fit: contain;
}
.produc-p2-float-img {
  position: absolute;
  left: 10.6vw;
  top: 50vh;
  width: 59.1vw;
  height: 11.46vw;
  overflow: hidden;
}
.produc-p2-float-img-container {
    position: relative;
    float: left;
    width: 19.7vw;
}
.produc-p2-float-img-container img{
  width: 19.7vw;
}
.produc-p2-float-img-hero{
  position: absolute;
  left: 2px;
  bottom: 2px;
  height: 2rem;
  width: 5rem;
  background: rgba(0,0,0,0.5);
  color: #fff;
  text-indent: 1rem;
}
</style>

<style lang="scss" scoped>
/*    /deep/.el-carousel__indicators--horizontal {
        position: absolute;
        left: auto;
        right: 48vw;
        bottom: 2vh;
        text-align: right;
 
        .el-carousel__indicator--horizontal button {
            width: 1vw;
            height: 1vw;
            background: #CCCCCC;
            border-radius: 50%;
            opacity: 0.5;
            margin-left: 2vw;
        }
 
        .el-carousel__indicator--horizontal.is-active button {
            width: 1vw;
            height: 1vw;
            background: #FCB814;
            border-radius: 50%;
            opacity: 0.5;
        }
    } */
</style>