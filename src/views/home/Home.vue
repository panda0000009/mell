<template>
  <div id="home">
<nav-bar class="home-nav"><div slot="center">葡萄籽</div></nav-bar>
<home-swiper :banners="banners" ></home-swiper>
<recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
//没用导入这个文件，画了半个小时找bug，好惨！！！！
import {getHomeMultidata} from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data(){
      return{
        banners:[],
        recommends:[]
      }
    },created () {
      //1 请求多个数据
      getHomeMultidata().then(res =>{
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
.home-nav{
  background-color: #83AF9B;
  color: #fff;
}
</style>
