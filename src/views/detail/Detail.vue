<template>
  <div id="detail">
      <DetailNavBar class="detail-nav"/>
      <scroll class="content" ref="scroll">
        <detail-swiper :top-images="topImages"/>
        <DetailBaseInfo :goods = "goods"/>
        <DetailShopInfo :shop = "shop"/>
        <DetailGoodsInfo :detail-info="detailInfo" @imageLoad = "imageLoad"/>
        <DetailParamInfo :param-info="paramInfo"/>
        <DetailCommentInfo ref="comment" :comment-info="commentInfo"/>
        <Goodlist :goods="recommendList"/>
      </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'




  import Scroll from 'common/scroll/Scroll'
  import Goodlist from'components/content/goods/GoodsList'

  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
export default {
name:'Detail',
components: {
  Scroll,
  DetailNavBar,
  DetailSwiper,
  DetailBaseInfo,
  DetailShopInfo,
  DetailGoodsInfo,
  DetailParamInfo,
  DetailCommentInfo,
  Goodlist,
},
data(){
  return{
    iid:null,
    topImages:[],
    goods:{},
    shop:{},
    detailInfo: {},
    paramInfo:{},
    commentInfo:{},
    recommendList:[]
  }
},

  created () {
    //1. 保存传入的iid
    this.iid = this.$route.params.iid
    //2 根据iid请求详情数据
    getDetail(this.iid).then(res =>{
      // console.log(res);

      //1.获取顶部图片轮播数据
      const data = res.result
      this.topImages = data.itemInfo.topImages

      //2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.colums, data.shopInfo.services)
      //3.创建商铺信息的对象
      this.shop = new Shop(data.shopInfo)
      //4.保存商品的详情数据
      this.detailInfo = data.detailInfo;
      //5 获取参数的信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // 6 保存评论信息
      if(data.rate.list){
        this.commentInfo = data.rate.list[0]
      }
    })
     getRecommend().then((res,error)=>{
        if(error) return
        this.recommendList = res.data.list
      })
  },


  methods: {
    imageLoad(){
      this.$refs.scroll.refresh()
    }
  }

}

</script>

<style scoped>
 #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px);
  }
</style>
