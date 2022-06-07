<template>
  <div>
    <!-- 注释，单行或多行 -->    
    <full-page :options="options" ref="fullpage">
      <!-- 第一屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p1bgsrc + ')', backgroundPositionY: 'bottom'}">
        <AppNavigator :invert="false"></AppNavigator>
          <div class="abths-p1-text-box"> 
            <h1>
                沿革
            </h1>
            <h2>
                发展历程
            </h2>
          </div>
      </div>
      <!-- 第二屏 -->    
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="abths-p2-upperbox">
          <div class="abths-p2-text-box-top">
              <h1><span>公司沿革</span></h1>
              <p>
                针对当时地沟油回流食物链，给人类健康造成伤害，废矿物油被填埋、焚烧或充当成品机油直接销售，在造成能源浪费的同时还给地球环境造成破坏，给交通构成安全隐患，远大集团决心站出来揭露他并通过自身行动彻底改变他，因此，一方面给国家相关领导提出《关于建立废油专营制度的建议》，另一方面筹建远大再生油公司
              </p>
          </div>
        </div>
        <div class="abths-p2-image-container"><img src="@/assets/img/1-3-2.jpg"></div>
          <div class="abths-table-container">
            <div class="table-row"  v-for="item in p2data" v-bind:key="item.year">
              <div class="year">{{item.year}}</div>
              <div class="detail">{{item.detail}}</div>
            </div>
          </div>
      </div>
      <!-- 第三屏 -->    
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="abths-p2-upperbox">
          <div class="abths-p3-text-box-top">
            <div class="abths-table-container">
              <div class="table-row"  v-for="item in p3data1" v-bind:key="item.year" >
                <div class="year">{{item.year}}</div>
                <div class="detail">{{item.detail}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="abths-p2-image-container"><img src="@/assets/img/1-3-3.jpg"></div>
          <div class="abths-table-container">
            <div class="table-row"  v-for="item in p3data2" v-bind:key="item.year">
              <div class="year">{{item.year}}</div>
              <div class="detail">{{item.detail}}</div>
            </div>
          </div>
      </div>
      <!-- 第四屏 -->  
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="abths-p2-upperbox">
          <div class="abths-p3-text-box-top">
            <div class="abths-table-container">
              <div class="table-row"  v-for="item in p4data1" v-bind:key="item.year" >
                <div class="year">{{item.year}}</div>
                <div class="detail">{{item.detail}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="abths-p2-image-container"><img src="@/assets/img/1-3-4.jpg"></div>
          <div class="abths-table-container">
            <div class="table-row"  v-for="item in p4data2" v-bind:key="item.year">
              <div class="year">{{item.year}}</div>
              <div class="detail">{{item.detail}}</div>
            </div>
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
      p1bgsrc: require("@/assets/background/1-3-1.jpg"),
      
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      },
      
      p2data: [{
        year: "2008",
        detail: "长沙远大再生油股份有限公司在远大城正式成立，注册资金2000万元，工厂设在远大城，经营范围为废油回收、储存、加工、销售，远大集团创始人张跃任董事长，远大集团副总裁葛新力任总经理",
      },
      {
        year: "2009",
        detail: "远大再生油公司当年回收以地沟油为主的各种废油约8000 吨，生产加工成再生燃料油，主要销售给大唐电力金竹山电厂，作为该厂600 兆瓦亚临界机组调试过168 的助燃燃料，创造较大的社会价值",
      },
      {
        year: "2010",
        detail: "公司与岳阳市湘阴县工业园管委会签订220亩用地合同，公司名称由“长沙远大再生油股份有限公司”变更为“远大（湖南）再生油股份有限公司",
      },
      ], //End of p2data
      p3data1: [{
        year: "2011",
        detail: "公司迁入湘阴县工业园，并筹建年生产能力17 万吨的废油生产工厂",
      },
      {
        year: "2012",
        detail: "远大废矿物油再生燃油一期项目7.2万吨点火正式投产，并向社会发布《远大废油采购十不原则》《再生油销售五不原则》，希望通过过程管理来彻底斩断地沟油回流食物链问题\r\n公司的行业管理经验被新华社编成内部教材进行传播",
      },
      {
        year: "2013",
        detail: "与广西英大石油合作，远大再生油全部销售给英大石油作为船用油使用",
      },
      ], //End of p3data1
      p3data2: [{
        year: "2014",
        detail: "自2008年至2014年，公司组织志愿者、媒体揭露地沟油回流食物链全过程并引起社会普遍关注，同时公司积极推动各级政府对餐余垃圾进行立法。国家出台相应的管理办法，各级政府成立专营制度，远大彻底斩断地沟油回流食物链的初衷基本实现，因而退出地沟油行业，专注废矿物油利用",
      },
      {
        year: "2015",
        detail: "增加含废矿物油类危险废物综合利用资质，至此公司HW08 类全项经营资质累计17.7 万吨",
      },
      {
        year: "2016",
        detail: "新征土地120亩，用于生产工艺全面升级，工厂占地面积共340亩",
      },
      {
        year: "2017",
        detail: "为6个地方政府解决历史遗留废油填埋造成环境污染问题",
      },
      ], //End of p3data1
      p4data1: [{
        year: "2018",
        detail: "公司引进战略投资，与长沙昱智三号投资合伙企业签订增资合同",
      },
      {
        year: "2019",
        detail: "建成技术先进、自动化程度高而综合能耗仅为国家指导标准50%的废油综合利用示范基地，同时新增HW09废乳化液综合利用资质1万吨\r\n中国气候变化特使解振华先生现场考察时，称赞远大再生油是环保典范、减碳先锋",
      },
      ], //End of p3data1
      p4data2: [{
        year: "2021",
        detail: "编制《废矿物油处理处置办法》，至此，公司参与了废矿物油行业准入、回收、生产、产品标准的所有标准制定\r\n公司被评为湖南湘江新区2021年度工业产值百强企业、湘阴县2021 年度工业纳税优胜企业",
      },
      {
        year: "2022",
        detail: "入选中国工业经济联合会“工业碳达峰”优秀企业案例",
      },
      ],
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
.abths-p1-text-box {
  display: table-cell; 
  padding-left: 68.5vw;
  padding-top: 28vh;
  width: 30vw;
  height: 30vh;
}
.abths-p1-text-box h1 {
    font-size: max(3.65vw, 52px);
    font-weight: bold;
    color: #ffffff;
}
.abths-p1-text-box h2 {
    font-size: max(1.88vw, 27px);
    color: #ffffff;
    line-height: calc(100vw * 180 / 3840);
}
.abths-p2-text-box-top {
    display: block;
    padding-top: 18vh;
    padding-left: 11vw;
    width: 70vw;
}
.abths-p2-text-box-top h1 {
  margin-bottom: 4vh;
  font-size: max(2.6vw, 18px);
  color: #000000;
}
.abths-p2-text-box-top p {
  font-size: max(1.04vw, 15px);
  color: #000000;
  line-height: 2.6vh;
}
.abths-p2-image-container {
    width: 100vw;
    height: 27vh;
    overflow: hidden;
}
.abths-p2-upperbox {
  height: 40vh;
  overflow: hidden;
}
.abths-p2-image-container img{
  width: 100vw;
}
.abths-table-container {
    display: block;
    padding-left: 11vw;
    width: 70vw; 
    font-size: max(1.04vw, 15px);
    color: #000000;
    line-height: 2.6vh;
    border-spacing: 10px;
    margin-top: 1vh;
}
.abths-table-container .year {
  width: 3vw;
  text-align: start;
  display: table-cell;
}
.abths-table-container .detail{
  width: 70vw;
  display: table-cell;
  white-space: pre-wrap;
}
.abths-table-container .table-row {
  display: table-row; 
  min-height: 10px;
  height: 2vh;
}
.abths-p3-text-box-top {
    display: block;
    padding-top: 18vh;
    width: 54vw;
}
</style>