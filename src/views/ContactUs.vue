<template>
  <div>
    <!-- 注释，单行或多行 -->    
    <full-page :options="options" ref="fullpage">
      <!-- 第一屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p1bgsrc + ')'}">
        <AppNavigator :invert="false"></AppNavigator>
          <div class="contact-p1-text-box"> 
            <h1>
                联系我们
            </h1>
            <h2>
                很高兴为您服务
            </h2>
          </div>
      </div>
      <!-- 第二屏 -->    
      <div fluid class="section screenwithbg bgbottom" :style="{backgroundImage: 'url(' + p2bgsrc + ')'}">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="contact-p2-iframe-box"> 
          <div class="contact-p2-leftbox">
            <h1><span>联系我们</span></h1>
            <p>仍有疑问？<br>欢迎您与我们联系！</p>
          </div>
          <div class="contact-p2-rightbox">
             <div style="height: 9vh; padding-top: 9vh; border-bottom: 1px solid #555555"></div>
            <div class="contact-p2-table">
              <h3>{{p3righthead}}</h3>
              <p>{{p3righttext}}</p>
            </div>
            <div v-for="item in p2list" :key="item.hero" class="contact-p2-smallimage">
                <img :src="item.imgpath">
                <p>{{item.hero}}</p>
            </div>
          </div>
        </div>
        <copyright-vue />
      </div>
      <!-- 第三屏结束 -->    
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
      p1bgsrc: require("@/assets/background/5-1-1.jpg"),
      p2bgsrc: require("@/assets/background/5-1-2.jpg"),

      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      },
      
      p3righthead: "远大再生油资源公司", 
      p3righttext: "电 话：0730-3670688\r\n邮 箱：zsy@broad.net\r\n地 址：湖南省湘江新区湘阴高新区", 

      p2list: [{
          hero: "再生资源公众号",
          imgpath: require("@/assets/img/5-2-1.jpg"),
        },{
          hero: "再生资源官网",
          imgpath: require("@/assets/img/5-2-2.jpg"),
        },{
          hero: "远大集团官网",
          imgpath: require("@/assets/img/5-2-3.jpg"),
      }]
    }
  }, // End of Data

methods: {
  next() {
    // 向下滚动一页
    this.$refs.fullpage.api.moveSectionDown();
  },

  requestData() {
    this.newslist = this.p2demodata;
  }
},

  mounted(){  //生命周期
			this.requestData(); // 调用方法
	}

}

</script>

<style scoped>
.contact-p1-text-box {
  display: table-cell; 
  padding-left: 11vw;
  padding-top: 29vh;
  width: 25vw;
  height: 14vh;
}
.contact-p1-text-box h1 {
    font-size: max(3.65vw, 30px);
    color: #fff;
    font-weight: bold;
    letter-spacing: 0.6vw;
}
.contact-p1-text-box h2 {
    font-size: max(1.87vw, 18px);
    color: #fff;
    letter-spacing: 0.2vw;
    line-height: 1.5;
}
.bgbottom {
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size:contain
}
 .contact-p2-iframe-box {
   display: block;
   position: relative;
   top:11.85vh;
   height: 58.15vh;
   width: 100vw;
 }
 .contact-p2-leftbox {
    display: table-cell;
    width: 19.7vw;
    padding-left: 10.5vw;
    padding-top: 7.8vh;
    vertical-align: top;
}
.contact-p2-leftbox h1{
  font-size: max(2.6vw, 37px);
}
.contact-p2-leftbox p{
  text-align: left;
  white-space: pre-wrap;
  line-height: 2;
}
.contact-p2-rightbox{
  display: table-cell;
  width: 59.375vw;
  overflow: hidden;
}
.contact-p2-table {
  padding-top: 7.4vh;
  width: 21.395vw;
  display: table-cell;
}
.contact-p2-table h3{
  font-size: max(1.25vw, 18px);
  padding-bottom: 2vh;
}
.contact-p2-table p {
  font-size: max(1.04vw, 15px);
  white-space: pre-wrap;
  line-height: 2;
}
.contact-p2-smallimage{
  padding-top: 6.6vh;
  width: 12.66vw;
  display: table-cell;
  vertical-align: bottom;
  text-align: center;
}
.contact-p2-smallimage img{
  width: 6.35vw;
  height: 6.35vw;
  object-fit: contain;
}
.contact-p2-smallimage p{
  font-size: max(1.04vw, 15px);
}
</style>