<template>
  <a-layout id="app" class="panel">
    <a-layout-sider class="treeselect">
      <LeftBar />
    </a-layout-sider>
    <!-- <div style="{display:inline-block}">
    <LeftBar />
    </div> -->
    <a-layout >
    <a-layout-header id="nav" class="layoutheader">
      <SlotBar>
      </SlotBar>
    </a-layout-header>
    <a-layout-content class="panel-body">
    <transition name="slide-left">
      <keep-alive>
          <router-view id="panel"  />
      </keep-alive>
    </transition>
    </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import SlotBar from "@/components/SlotBar.vue";
// import FloatBotton from "@/components/bar/FloatBotton.vue";
import LeftBar from "@/components/bar/LeftBar.vue";
import PubSub from 'pubsub-js';
import Ant from "ant-design-vue";
// import Ant from "ant-design-vue";
// tslint:disable-next-line:no-var-requires
// const { Button, message }  = require('ant-design-vue');
// tslint:disable-next-line:no-var-requires
@Component({
  components:{
    SlotBar,
    // AButton:Button,
    // AMessage:message
    LeftBar,
    ALayout: Ant.Layout,
    ALayoutSider: Ant.Layout.Sider,
    ALayoutHeader: Ant.Layout.Header,
    ALayoutContent: Ant.Layout.Content,
  }
})
export default class App extends Vue {
    private collapsed = true;
    public destroyed() {
        console.log((this as any).some);
    }
    @Emit()
    private toggleCollapsed() {
      this.collapsed = !this.collapsed;
    }
}
</script>

<style lang="scss">
$headerbarheight:24px;
$vheight:100vh; 
body{
    /* background-color: gray; */
    background-image: url("/html/xinjiang/img/background4.jpg") ;
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
    background-attachment: fixed; 
    background-position: center center;
    height:100vh;
    width:100vw;
    // overflow: hidden;
    font-size: 13px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  position: relative;
}
#rrrrrrv{
  position: relative;
}
#nav {
  // padding: 30px;
  position: relative;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.panel-heading{
  z-index: 400;
}
.panel-body{
    position: relative;
    width: 100%;
}

.ant-tree{
    z-index: 499;//小于 floatbotton;
    position: relative;
    color: white !important;
    text-align: left;
    background: radial-gradient(circle at center,#000066 0%,#000000 200%);
}
.ant-tree li span[class~="ant-tree-node-content-wrapper"]{
    color: white !important;
}

#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
  z-index:401;
}
.ant-layout-sider{
  top:0;
  z-index:401;
  // position: fixed;
  height: 100vh !important;
  overflow-y: auto;
  width: auto !important;
  max-width: 100vw !important;
  min-width: 0px !important;
  flex: none!important;
}
.layoutheader{
  height: $headerbarheight;
  z-index:400;
}
.ant-layout-header{
  padding: 0px;
}
</style>
