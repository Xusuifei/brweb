<template>
  <div id="CopyrightBanner" :style="{color:(this.invert ?'#000000':'#ffffff')}">
    <p>Copyright© <a :style="{color:(this.invert ?'#000000':'#ffffff')}" href="www.broad.com">远大科技集团</a><a :style="{color:(this.invert ?'#000000':'#ffffff')}" href="https://beian.miit.gov.cn/"><span class="copyrightspan">湘ICP备202209150号-1</span></a><span class="copyrightspan">电  话：0730-3070688</span></p>
  </div>
</template>



<script>
   export default {
    name: "CopyrightBanner",
    props: {
      invert: { 
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
      };
    },
    methods: {
    }
  }
</script>

<style scoped>
#CopyrightBanner{
    position: fixed;
    bottom: 15px;
    width: 100vw;
    font-size: 12px;
    text-align: center;
}
.copyrightspan {
  margin-left: 5rem;
}
</style>