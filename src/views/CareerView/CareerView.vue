<template>
  <div>
    <!-- 注释，单行或多行 -->    
    <full-page :options="options" ref="fullpage">
      <!-- 第一屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p1bgsrc + ')'}">
        <AppNavigator :invert="true"></AppNavigator>
          <div class="jobov-p1-text-box"> 
            <h1>
                加入我们
            </h1>
            <h2>
                欢迎加入远大资源
            </h2>
          </div>
      </div>
      <!-- 第二屏 -->    
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="iframe-box"> 
        <!-- news list start-->
          <div class="abths-table-left"><h1><span>招聘岗位</span></h1><p>欢迎加入远大资源</p></div>
            <div class="abths-table-container">
              <div><div class="title"></div>
                <div class="cat"></div>
                <div class="cat"></div>
                <div class="cat">搜索岗位</div>
                <div class="date-head"><div class="searchInput"><input v-model="keyword" type="text" style="width: 15vw"
                      placeholder="岗位">
                        <svg style="vertical-align: middle;" width="1em" height="1em" viewBox="3 3 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 3a5.5 5.5 0 014.23 9.02l4.12 4.13a.5.5 0 01-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 118.5 3zm0 1a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"></path>
                        </svg>  </div>
              </div></div>
              <div class="table-row"  v-for="(item, i) in p2demodata" v-bind:key="i">
                <div class="title">{{item.title}}</div>
                <div class="cat">{{item.cat}}</div>
                <div class="cat">{{item.number}}</div>
                <div class="cat">{{item.location}}</div>
                <div class="date">{{item.date}}</div>
              </div>
              </div>
              <div class="pagination-block">
                <pagination
                  :totalPages="1"
                  :perPage="5"
                  :currentPage="currentPage"
                  @pagechanged="onPageChange"
                />
            </div>
          </div>
        <!-- news list end -->
      </div>
      <!-- 第三屏 -->   
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="jobov-p2-iframe-box"> 
           <!-- carousel start-->
          <el-carousel height="85vh" :interval="8000" arrow="always">
            <el-carousel-item v-for="item in p2data" :key="item.name">
              <div class="jobov-p2-leftbox">
                <div v-for="text in item.text" :key="text.h1">
                  <h1><span>{{text.h1}}</span></h1>
                  <p>{{text.p}}</p>
                </div>
                <div style="padding-top: 11.65vh;"></div>
              </div>
              <div class="jobov-p2-rightbox">
                <img :src="item.fullimage" class="jobov-p2-rightimage">
              </div>
            </el-carousel-item>
          </el-carousel>
          <!-- carousel end-->
        </div>
      </div>
      <!-- 第四屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p3bgsrc + ')'}">
        <AppNavigator :invert="false"></AppNavigator>
          <div class="jobov-p3-text-box"> 
            <h1>
                招聘动态
            </h1>
            <p>{{p3text}}</p>
          </div>
          <Copyright :invert="false"/>
      </div>
      <!-- 第三屏结束 -->    
    </full-page>
  </div>
</template>

<script>
import AppNavigator from '@/components/AppNavigator.vue';
import Copyright from '@/components/Copyright.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    AppNavigator,
    Copyright,
    Pagination,
}
  ,
  data() {
    return {
      p1bgsrc: require("@/assets/background/4-1-1.jpg"),
      p3bgsrc: require("@/assets/background/4-1-3.jpg"),

      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      },

      p2demodata: [{
        title: "成本会计",
        cat: "中级别",
        number: "1人",
        location: "长沙",
        date: "2022-04-18"
      },{
        title: "",
        cat: "",
        number: "",
        location: "",
        date: ""
      },{
        title: "",
        cat: "",
        number: "",
        location: "",
        date: ""
      },{
        title: "",
        cat: "",
        number: "",
        location: "",
        date: ""
      },{
        title: "",
        cat: "",
        number: "",
        location: "",
        date: ""
      }],

      currentPage: 1,
      
      p2data: [{
        text: [{
          h1: "用人标准",
          p: "有德有才，破格重用；有德低才，培养使用\r\n有才低德，教育使用；有才无德，坚决不用",
        },{
          h1: "用人方针",
          p: "高素质、高责任、高负荷、高绩效、高待遇",
        }],
        fullimage: require("@/assets/img/4-2-1.jpg"),
      },{
        text: [{
          h1: "薪酬原则",
          p: "薪酬保密：薪酬制度公开，员工收入保密\r\n个体差异：能者多劳、智者多教、仁者高职、优者高酬\r\n反对平均：尊重每个人的特殊才能和特别贡献\r\n持续改善：处于本地区、本行业最高水平",
        }],
        fullimage: require("@/assets/img/4-2-1.jpg"),
      },{
        text: [{
          h1: "远大福利",
          p: "基本福利：五险一金，生日婚丧节日礼金，带薪年假\r\n长期福利：80%员工获当年工资30%，5年后发放\r\n低  碳  奖：奖励不买车者每年3200元\r\n高龄慰问：员工80岁父母每人每年5000元\r\n健康生活：三餐免费，80%有机食品，住宿免费，空调热水，洁净新风\r\n无人超市：成本价出售有机食品、绿色食品和普通商品\r\n业余活动：10个兴趣小组，每周电影，节日晚会图书馆，体育馆等",
        }],
        fullimage: require("@/assets/img/4-2-1.jpg"),
      }],
      p3text: "招聘时间：全年每周三、六9:00~ 15:00\r\n面试地点：湖南省湘江新区湘阴高新区舜天大道 \r\n面试流程：填表->初试->复试->试用\r\n招聘热线：0730-3070688\r\n招聘邮箱：hrong@broad.net\r\n公司官网：www.broadzsy.com"

    }
  }, // End of Data

methods: {
  next() {
    // 向下滚动一页
    this.$refs.fullpage.api.moveSectionDown();
  },

  //requestData() {
  //  this.newslist = this.p2demodata;
  //}
  onPageChange(page) {
    console.log(page)
    this.currentPage = page;
  }
},

  mounted(){  //生命周期
	//		this.requestData(); // 调用方法
	}

}
</script>

<style scoped>
.jobov-p1-text-box {
  display: table-cell; 
  padding-left: 61vw;
  padding-top: 20vh;
  width: 25vw;
  height: 14vh;
}
.jobov-p1-text-box h1 {
    font-size: max(3.65vw, 30px);
    color: #000;
    font-weight: bold;
    letter-spacing: 0.6vw;
}
.jobov-p1-text-box h2 {
    font-size: max(1.87vw, 18px);
    color: #000;
    letter-spacing: 0.2vw;
    line-height: 1.5;
}
 .jobov-p2-iframe-box {
   display: block;
   position: relative;
   top:11.85vh;
   height: 88.15vh;
   width: 100vw;
 }
 .jobov-p2-leftbox {
    display: table-cell;
    width: 39.5vw;
    height: 60vh;
    padding-left: 10.5vw;
    vertical-align: middle;
}
.jobov-p2-leftbox h1{
  margin-top: 7.5vh;
  margin-bottom: 2vh;
}
.jobov-p2-leftbox p{
  text-align: left;
  white-space: pre-wrap;
  line-height: 2;
}
.jobov-p2-rightbox{
  display: table-cell;
  width: 50vw;
  height: inherit;
  overflow: hidden;
  vertical-align: middle;
}
.jobov-p2-rightimage {
  background-color: #0075C2;
  width: min(88.88vh, 50vw);
  object-fit: contain;
}
.jobov-p3-text-box {
  display: table-cell; 
  padding-left: 75vw;
  padding-top: 25vh;
  width: 28vw;
  height: 14vh;
}
.jobov-p3-text-box h1 {
    font-size: max(2.6vw, 25px);
    color: #000;
    padding-bottom: 3.98vh;
}
.jobov-p3-text-box p {
    font-size: max(1.04vw, 15px);
    color: #000;
    letter-spacing: 0.2vw;
    line-height: 1.5;
    white-space: pre-wrap;
}
.abths-table-container {
    display: inline-block;
    width: 47vw; 
    padding-left: 10vw;
    font-size: max(1.04vw, 15px);
    color: #111111;
    margin-top: 1vh;
}
.abths-table-container .table-head {
  display: table-row; 
  min-height: 10px;
  width: 100%;
  border-bottom: 1px solid #111111;
}
.abths-table-container .title {
  display: table-cell;
  vertical-align: middle;
  width: 12vw;
  text-indent: 2vw;
  border-bottom: 1px solid #111111;
}
.abths-table-container .cat{
  width: 6vw;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  border-bottom: 1px solid #111111;
}
.abths-table-container .date{
  width: 15vw;
  display: table-cell;
  vertical-align: middle;
  text-align: right;
  padding-right: 2vw;
  border-bottom: 1px solid #111111;
}
.abths-table-container .table-row {
  display: table-row; 
  min-height: 10px;
  height: 8vh;
}
.abths-table-left {
  display: inline-block;
  vertical-align: top;
}
.abths-table-left h1{
  font-size: max(2.6vw, 37px);
  margin-bottom: 3vh;
}
.abths-table-left p{
  font-size: max(1.56vw, 22px);
}
.date-head {
  width: 17vw;
  display: table-cell;
  vertical-align: middle;
  height: 14vh;
  border-bottom: 1px solid #111111;
}
.pagination-block{
  padding-top: 3vh;
  text-align: right;
  padding-right: 10vw;
}
.searchInput {
  border: 1px solid #111111;
}
</style>

<style lang="scss" scoped>
    /deep/.el-carousel__indicators--horizontal {
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
    }
</style>