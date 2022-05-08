<template>
  <div fluid id="homepage4bg" style="display: block; position: relative">
        <AppNavigatorVue :invert="true"></AppNavigatorVue>
      <div id="home4-text-box1">
          2023年拟建设完成的二期工程用地
      </div>
      <div id="home4-text-box2">
          <div style="margin: 2vw">
          <h1><span>远大再生资源公司</span></h1>
          <br>
            远大再生资源公司系远大科技集团控股子公司，成立于2008年，主要从事废矿物油(HW08全项)和废乳化液(HW09)全项的综合利用。公司以独创技术将工业、交通产生的废矿物油及废乳化液作为原料生产成再生润滑油基础油产品，是一家生态环境治理、废弃资源综合利用企业。      
          </div>
      </div>
      <div style="position:relative; float: right; margin-right: 100px; top: calc(100vh - 80px); background: rgba(255,255,255,0.5);">远大再生资源公司位于湘江新区湘阴高新区鸟瞰图</div>
  </div>
</template>

<script>
export default {
    name: "home-four",

    data() {
        return {
        }
    },

    methods: {

    },
}
</script>

<style scoped>
#homepage4bg {
        background: url("../../assets/img/0-4-2x.png") no-repeat;
        background-size: contain;
        display: block;
        width: 100vw;
        height: 100vh;
}
.mainimage {
    width: 100%;
    height: auto;
    object-fit: contain;
}
#home4-text-box1 {
    position: absolute;
    min-width: 400px;
    width: 20vw;
    height: calc(100vw * 46 / 3840);
    font-size: calc(100vw * 48 / 3840);
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 60px;
    left: 10vw;
    top: 20vh; 
}
#home4-text-box2 {
    position: absolute;
    width: 20vw;
    min-width: 300px;
    height: calc(100vw * 808 / 3840);
    background: #F6F6F6;
    opacity: 0.9;
    font-size: 14px;
    letter-spacing: 0.1rem;
    left: calc(100vw * 400 / 3840);
    bottom: 10vh;
    line-height: calc(100vw * 56 / 3840);
}
#home4-text-box2 h1 {
    font-size: 18px;
}
</style>