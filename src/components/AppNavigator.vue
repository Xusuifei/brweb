<template>
  <div class="navbar">
    <div style = "display: inline-flex; position:absolute">
      <div style="min-width: 64px; vertical-align: middle; margin-left: 7vw; width: 16vw; margin-right: 10vw;">
        <a href="/"><img id="logo1" src="../assets/logo_2x.png"
          sizes="max(9vw, 129px)"
          alt="logo" style="object-fit:scale-down; width:100%; height: auto; z-index: 900"
          :style="{filter:(this.invert ?'invert(100)':'invert(0)')}"
          ></a>
      </div>
      <div style="min-width: 600px; width: 45vw">
        <el-menu :default-active="activeIndex"
          class="el-menu-headnav"
          :style="{color:(this.invert ?'#000000':'#ffffff')}"
          mode="horizontal" 
          :router="true" 
          @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">关于我们</template>
            <el-menu-item class="el-menu-headnav" :style="{color:(this.invert ?'#000000':'#ffffff')}" index="/about">概述</el-menu-item>
            <el-menu-item class="el-menu-headnav" :style="{color:(this.invert ?'#000000':'#ffffff')}" index="/about/certs">荣誉资质</el-menu-item>
            <el-menu-item class="el-menu-headnav" :style="{color:(this.invert ?'#000000':'#ffffff')}" index="/about/history">沿革</el-menu-item>
            <el-menu-item class="el-menu-headnav" :style="{color:(this.invert ?'#000000':'#ffffff')}" index="/about/culture">企业文化</el-menu-item>
            <el-menu-item class="el-menu-headnav" :style="{color:(this.invert ?'#000000':'#ffffff')}" index="/about/team">团队风采</el-menu-item>
            <el-menu-item class="el-menu-headnav" :style="{color:(this.invert ?'#000000':'#ffffff')}" index="/about/video">视频集锦</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">产品中心</template>
            <el-menu-item class="el-menu-headnav" :style="{color:(this.invert ?'#000000':'#ffffff')}" index="/product">产品</el-menu-item>
            <el-menu-item class="el-menu-headnav" :style="{color:(this.invert ?'#000000':'#ffffff')}" index="/product/source">原料回收</el-menu-item>
            <el-menu-item class="el-menu-headnav" :style="{color:(this.invert ?'#000000':'#ffffff')}" index="/product/case">案例</el-menu-item>
          </el-submenu>
    <!--      <el-submenu index="3">
            <template slot="title">新闻中心</template>
            <el-menu-item index="2-1">公司新闻</el-menu-item>
            <el-menu-item index="2-2">行业动态</el-menu-item>
          </el-submenu> -->
          <el-menu-item index="/news">新闻中心</el-menu-item>
          <el-menu-item index="/career">加入我们</el-menu-item>
          <el-menu-item id="last_nav" index="/contact">联系我们</el-menu-item>
        </el-menu>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
   export default {
    name: "AppNavigator",
    props: {
          invert: { 
            type: Boolean,
            default: true,
          }
    },

    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  }
</script>

<style scoped>
.navbar {
  position: absolute;
  top: 2vw;
}
.line {
  height: 1px;
  border-bottom: solid 1px #e6e6e6;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu-headnav {
  background: transparent;
}
.el-menu-item{
  min-width: 76px;
  width: 9vw;
    text-align: center;
}
.el-submenu{
  min-width: 76px;
  width: 9vw;
    text-align: center;
}
</style>