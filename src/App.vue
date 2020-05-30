<template>
<div id="app">
  <keep-alive exclude="Detail">
  <router-view></router-view>
  </keep-alive>
  <!-- tab-bar不能放在keep-view中，不然直接被隐藏掉 -->
  <main-tab-bar></main-tab-bar>
</div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
export default {
  name:'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import 'assets/css/base.css'
</style>
