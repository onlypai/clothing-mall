<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-navbar"
      @titleclick="titleclick"
      ref="detailnavbar"
    ></detail-nav-bar>
    <scroll
      class="content"
      ref="backScroll"
      @scroll="contentscroll"
      :probe-type="3"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :param-info="paramInfo" ref="param" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <detail-recomment-info :recommend-info="recommendInfo" ref="recomment" />
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <!-- 返回顶部组件 -->
    <back-top @click.native="backclick" v-show="isBackTopShow" />
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childcoms/DetailNavBar";
import DetailSwiper from "views/detail/childcoms/DetailSwiper";
import DetailBaseInfo from "views/detail/childcoms/DetailBaseInfo";
import DetailShopInfo from "views/detail/childcoms/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";
import DetailGoodsInfo from "./childcoms/DetailGoodsInfo.vue";
import DetailParamInfo from "./childcoms/DetailParamInfo.vue";
import DetailCommentInfo from "./childcoms/DetailCommentInfo.vue";
import DetailRecommentInfo from "./childcoms/DetailRecommentInfo.vue";
import DetailBottomBar from './childcoms/DetailBottomBar.vue';


import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
import { debounce } from "common/utils";
import { itemListenerMixin,backTop } from "common/mixin";

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
    DetailCommentInfo,
    DetailRecommentInfo,
    DetailBottomBar,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      //推荐商品信息,数组
      recommendInfo: [],
      //各个组件位置
      themeTopY: [],
      //用于滚动事件导航栏index的保存
      currentIndex: 0,
    };
  },
  //mounted函数使用混入
  mixins: [itemListenerMixin , backTop],

  created() {
    this.iid = this.$route.params.id;
    //根据id请求商品详情数据
    getDetail(this.iid).then((res) => {
      // console.log(res);
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
      //请求商品的很多张参数图片
      this.detailInfo = data.detailInfo;
      //请求商品参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //请求评论信息
      if (data.rate.list) this.commentInfo = data.rate.list[0];
    });
    //请求推荐商品信息
    getRecommend().then((result) => {
      this.recommendInfo = result.data.list;
    });
  },

  destroyed() {
    //detail页面离开时取消对全局事件HomeGoodsListItem的监听
    this.$bus.$off("HomeGoodsListItem", () => {
      refresh();
    });
  },
  methods: {
    imageLoad() {
      //监听图片加载，实时刷新可滚动高度
      this.$refs.backScroll.refresh();

      //图片加载完成之后，将组件位置加到数组里，不用防抖函数也可以
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.param.$el.offsetTop);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      this.themeTopY.push(this.$refs.recomment.$el.offsetTop);
      this.themeTopY.push(Number.MAX_VALUE);//最大值
    },
    titleclick(index) {
      //点击移动到商品 参数 评论 推荐位置，去除导航高度
      this.$refs.backScroll.scrollTo(0, -this.themeTopY[index] + 44, 200);
    },
    contentscroll(position) {
      const positionY = -position.y+44;//保存滚动的weizhi
      const length = this.themeTopY.length;
      // for (let i = 0; i < length; i++) {
      //   if (
      //     this.currentIndex !== i &&
      //     ((i < length - 1 &&
      //       positionY >= this.themeTopY[i] &&
      //       positionY < this.themeTopY[i + 1]) ||
      //       (i === length - 1 && positionY >= this.themeTopY[i]))
      //   ) {
      //     this.currentIndex = i;
      //     this.$refs.detailnavbar.currentIndex=this.currentIndex
      //   }
      // }

      //另一种思想，原来的数组里面有四个元素，现在后面push一个最大的值Number.MAX_value,便于进行比较，见上
      //注意：遍历的时候是 i < length-1，加上一个最大值，length为5，这里只需要0、1、2、3
      for (let i = 0; i < length-1; i++) {
        if(this.currentIndex!==i&&(positionY >= this.themeTopY[i] && positionY < this.themeTopY[i + 1])){
          this.currentIndex = i;
          this.$refs.detailnavbar.currentIndex=this.currentIndex
        }
      }
      //3.返回顶部按钮的显示隐藏
      this.backTopListener(position)
    },
    addToCart(){
      //保存商品信息
      const product={}
      product.iid=this.iid
      product.title=this.goods.title
      product.desc=this.goods.desc
      //购物车里显示的价格
      product.realprice=this.goods.nowPrice
      product.img=this.topImages[0]

      //将商品添加至购物车，用vuex
      this.$store.dispatch('addpro',product).then(res=>{
        this.$toast.show(res)
      })
    }
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 110;
  background-color: #fff;
  height: 100vh;
  overflow: hidden;
}
.detail-navbar {
  position: relative;
  z-index: 50;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px - 49px); 
}
</style>