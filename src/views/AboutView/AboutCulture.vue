<template>
  <div>
    <!-- 注释，单行或多行 -->    
    <full-page :options="options" ref="fullpage">
      <!-- 第一屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p1bgsrc + ')'}">
        <AppNavigator :invert="false"></AppNavigator>
          <div class="abtcl-p1-text-box"> 
            <h1>
                企业文化
            </h1>
            <h2>
                远大再生资源公司
            </h2>
          </div>
      </div>
      <!-- 第二屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p2bgsrc + ')', backgroundPositionY: 'top'}">
        <AppNavigator :invert="false"></AppNavigator>
        <div class="abtcl-p2-iframe-box"> 
          <ul>
            <li v-for="item in p2list" v-bind:key="item.bgimg" @mouseover="switchbg(item.bgimg)">
              <div class="abtcl-p2-pop-up">
                <div v-for="text in item.text" v-bind:key="text.h1">
                    <h1><span>{{text.h1}}</span></h1>
                    <p>{{text.p}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <Copyright />
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
      p1bgsrc: require("@/assets/background/1-4-1.jpg"),
      p2bgsrc: require("@/assets/background/1-4-2-1.jpg"),
      
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      },
      p2list: [{
            text: [
              {h1: "远大再生资源使命",
               p: "为世界根除废油污染",},
            ],
            bgimg: require("../../assets/background/1-4-2-1.jpg"),
          },
          { text: [
              {h1: "远大信仰",
               p: "农场法则\r\n付出与回报对等，先付出后回报\r\n年年付出，才能年年回报",},
            ],
            bgimg: require("../../assets/background/1-4-2-2.jpg"),
          },
          {text: [
              {h1: "远大人的信条",
               p: "完善自我，出类拔萃\r\n严于克己，绝对服从",},
            ],
            bgimg: require("../../assets/background/1-4-2-3.jpg"),
          },
          {text: [
              {h1: "远大企业道德底线",
               p: "七不一没有\r\n不污染环境、不剽窃技术\r\n不蒙骗客户、不恶性竞争\r\n不搞三角债、不偷税、不行贿\r\n没有昧良心行为",},
            ],
            bgimg: require("../../assets/background/1-4-2-4.jpg"),
          },
          {text: [
              {h1: "远大员工道德底线",
               p: "十不一没有\r\n不渎职、不偷懒、不失信、不撒谎\r\n不结派，不背叛、不行贿、不贪占\r\n不浪费、不污染，没有坏心肠",},
            ],
            bgimg: require("../../assets/background/1-4-2-5.jpg"),
      }],
    } // End of Return
  }, // End of Data

  methods: {
    next() {
      // 向下滚动一页
      this.$refs.fullpage.api.moveSectionDown();
    },
    switchbg(imgsrc){
      this.p2bgsrc = imgsrc;
    }
  }
}

</script>

<style scoped>
.abtcl-p1-text-box {
  display: table-cell; 
  padding-left: 68.5vw;
  padding-top: 22vh;
  width: 30vw;
  height: 30vh;
}
.abtcl-p1-text-box h1 {
    font-size: max(3.65vw, 52px);
    font-weight: bold;
    color: #ffffff;
}
.abtcl-p1-text-box h2 {
    font-size: max(1.88vw, 27px);
    font-weight: 300;
    color: #ffffff;
    line-height: calc(100vw * 180 / 3840);
}
.abtcl-p2-iframe-box {
  width: 92.5vw;
  padding-left: 7.5vw;
  height: 100vh;
  background: linear-gradient(to top, rgba(11,11,11,0.5) 0%, transparent 40%);
}
.abtcl-p2-iframe-box ul{
  height: 100%;
  width: inherit;
  list-style: none;
}
.abtcl-p2-iframe-box li{
  height: 100vh;
  float: left;
  vertical-align: bottom;
  width: 17vw;
  border-left: 1px solid rgba(255,255,255,0.1);
  border-right: 1px solid rgba(255,255,255,0.1);;
}
.abtcl-p2-iframe-box li:hover p{
  display:contents;
  white-space: pre-wrap;
  font-size: max(1.04vw, 15px);
  color: #FFFFFF;
  line-height: 1.5;
}
.abtcl-p2-pop-up{
  height: 87.3vh;
  display: table-cell;
  vertical-align: bottom;
  padding-left: 1vw;
}
.abtcl-p2-pop-up h1{
  font-size: max(1.25vw, 18px);
  color: #FFFFFF;
  line-height: max(1.8vw,18px);
  margin-top: 2vh;
  margin-bottom: 2vh;
}
.abtcl-p2-pop-up p{
  display: none;
}
</style>