<template>
  <div>
    <!-- 注释，单行或多行 -->    
    <full-page :options="options" ref="fullpage">
      <!-- 第一屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p1bgsrc + ')'}">
        <AppNavigator :invert="true"></AppNavigator>
          <div class="produc-p1-text-box"> 
            <h1>
                新闻
            </h1>
            <h2>
                最新资讯
            </h2>
          </div>
      </div>
      <!-- 第二屏 -->    
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="iframe-box"> 
          <!-- news list start-->
        <h1><span>新闻</span></h1>
        <div class="news-p2">
          <div class="abths-table-container">
            <div class="table-row"><div class="date-head"></div><div class="title-head"></div></div>
            <div class="table-row"  v-for="(item, i) in p2demodata" v-bind:key="i">
              <div class="date"><p class="day">{{item.date}}</p><p class="month">{{item.month}}</p></div>
              <div class="title">{{item.title}}</div>
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
        </div>
          <!-- news list end -->
        </div>
        <Copyright :invert="true" />
      </div>
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
      p1bgsrc: require("@/assets/background/3-1-1.jpg"),
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      },

      newslist: [],
      //industrynews: [], //未来增加行业新闻： 
      currentPage: 1,

      p2demodata: [{
        title: "生态环境治理案例",
        date: "12",
        month: "2021-05",
        fulllist: "形成原因：某单位在关停时填埋的油泥，20年后城市开发被挖掘出来\r\n危废类型：油泥，Hw08\r\n危废数量：883.78吨\r\n服务内容：集中回收、处理，现场修复\r\n治理修复时间：25天",
      },{
        title: "环境治理案例",
        date: "11",
        month: "2021-05",
        desc: "形成原因：某单位被关停时未及时处理的油泥\r\n危废类型：油泥，含油废水，Hw08\r\n危废数量：4157.48吨\r\n服务内容：集中回收、处理，现场修复\r\n治理修复时间：45天",
      },{
        title: "环境治理案例",
        date: "07",
        month: "2021-05",
        desc: "形成原因：某单位被关停时未及时处理的油泥\r\n危废类型：油泥，含油废水，Hw08\r\n危废数量：4157.48吨\r\n服务内容：集中回收、处理，现场修复\r\n治理修复时间：45天",
      },{
        title: "环境治理案例",
        date: "21",
        month: "2021-04",
        desc: "形成原因：某单位被关停时未及时处理的油泥\r\n危废类型：油泥，含油废水，Hw08\r\n危废数量：4157.48吨\r\n服务内容：集中回收、处理，现场修复\r\n治理修复时间：45天",
      },{
        title: "环境治理案例",
        date: "12",
        month: "2021-05",
        desc: "形成原因：某单位被关停时未及时处理的油泥\r\n危废类型：油泥，含油废水，Hw08\r\n危废数量：4157.48吨\r\n服务内容：集中回收、处理，现场修复\r\n治理修复时间：45天",
      }],
    }
  }, // End of Data

methods: {
  next() {
    // 向下滚动一页
    this.$refs.fullpage.api.moveSectionDown();
  },

  requestData() {
    this.newslist = this.p2demodata;
  },

  onPageChange(page) {
    console.log(page)
    this.currentPage = page;
  }
},

  mounted(){  //生命周期
			this.requestData(); // 调用方法
	}
}
</script>

<style scoped>
.produc-p1-text-box {
  display: table-cell; 
  padding-left: 59.4vw;
  padding-top: 22.7vh;
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
   display: block;
   position: relative;
   padding-top:11.85vh;
   height: 88.15vh;
   width: 100vw;
 }
 .abths-table-container {
    display: block;
    width: 50vw; 
    padding-left: 20vw;
    font-size: max(1.04vw, 15px);
    color: #111111;
    margin-top: 1vh;
}
.abths-table-container .date-head {
  display: table-cell;
  width: 5.6vw;
  height: 2vh;
  border-bottom: 1px solid #111111;
}
.abths-table-container .title-head{
  width: 70vw;
  display: table-cell;
  height: 2vh;
  border-bottom: 1px solid #111111;
}
.abths-table-container .date {
  text-align: center;
  display: table-cell;
  width: 5.6vw;
  height: 8vh;
  border-bottom: 1px solid #111111;
}
.abths-table-container .day {
  border-right: 1px solid #111111;
  font-size: max(1.46vw, 21px);
  margin-top: 1.5vh;
}
.abths-table-container .month {
  font-size: max(0.6vw, 12px);
  margin-bottom: 1.5vh;
  border-right: 1px solid #111111;
}
.abths-table-container .title{
  width: 70vw;
  display: table-cell;
  white-space: pre-wrap;
  text-indent: 3vw;
  height: 8vh;
  border-bottom: 1px solid #111111;
}
.abths-table-container .table-row {
  display: table-row; 
}
.table-row:hover .date{
  background: #f7f7f7;
  text-indent: 1vw;
}
.table-row:hover .title{
  background: #f7f7f7;
  text-indent: 4vw;
}
.pagination-block{
  padding-top: 3vh;
  text-align: right;
}
</style>