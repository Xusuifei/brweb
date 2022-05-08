<template>
  <div>
    <!-- 注释，单行或多行 -->    
    <full-page :options="options" ref="fullpage">
      <!-- 第一屏 -->    
      <div fluid class="section screenwithbg" :style="{backgroundImage: 'url(' + p1bgsrc + ')'}">
        <AppNavigator :invert="false"></AppNavigator>
          <div class="abtct-p1-text-box"> 
            <h1>
                资质
            </h1>
            <h2>
                专业能力
            </h2>
          </div>
      </div>
      <!-- 第二屏 -->    
      <div fluid class="section screennobg">
        <AppNavigator :invert="true"></AppNavigator>
        <div class="abtct-p2-iframe-box"> 
          <div class="abtct-p2-text-box">
            <h1>
                <span>远大再生油资源公司</span>
            </h1>
            <p>
                远大科技集团有限公司是1988年以3万元起家的中国民营企业，创业以来开发了上百种高科技产品，从未模仿过同行业技术。远大使命是“为了人类未来：用原始创新的节能、耐久科技，保护地球家园。用原始创新的洁净、安全科技，保护人类生命”。远大总部设于长沙，产品覆盖80多国，
                <br>远大再生油资源公司系远大科技集团控股子公司，成立于2008年，主要从事废矿物油(HW08全项) 和废乳化液(HW09) 全项的综合利用。公司以独创技术将工业、交通产生的废矿物油及废乳化液作为原料生产成再生润滑油基础油产品，是一家生态环境治理、废弃资源综合利用企业，公司设于长沙湘江新区湘阴工业园
                <br>产品：润滑油基础油75SN、150SN、250SN、350SN，尾油，抽出油
            </p>
          </div>
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
      p1bgsrc: require("@/assets/background/1-2-1.png"),
      
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      },

    }
  },
  methods: {
    next() {
      // 向下滚动一页
      this.$refs.fullpage.api.moveSectionDown();
    },
  }
}

</script>

<style scoped>

</style>