<template>
  <div id="detail">
    <detail-nav-bar class="detail-navbar"></detail-nav-bar>
    <scroll class="content" ref="backScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :paramInfo="paramInfo"/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childcoms/DetailNavBar";
import DetailSwiper from "views/detail/childcoms/DetailSwiper";
import DetailBaseInfo from "views/detail/childcoms/DetailBaseInfo";
import DetailShopInfo from "views/detail/childcoms/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";
import DetailGoodsInfo from './childcoms/DetailGoodsInfo.vue';
import DetailParamInfo from './childcoms/DetailParamInfo.vue';

import { getDetail, Goods, Shop,GoodsParam } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo:{},
      paramInfo:{}
    };
  },
  created() {
    //保存传入的id
    this.iid = this.$route.params.id;
    //根据id请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      //请求轮播图片
      this.topImages = data.itemInfo.topImages;
      //请求图片商品的相关信息，利用类
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //请求店铺相关信息
      this.shop = new Shop(data.shopInfo);
      //请求商品的很多张展示图片
      this.detailInfo=data.detailInfo
      //请求商品参数
      this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
    });
  },
  methods:{
      imageLoad(){
          //监听图片加载，实时刷新可滚动高度
          this.$refs.backScroll.refresh()
      }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 110;
  background-color: #fff;
  height: 100vh;
}
.detail-navbar{
    position: relative;
    z-index: 50;
    background-color: #fff;
}
.content{
    height: calc(100% - 44px);
}
</style>