<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <!-- 多一个tab-control组件解决吸顶效果ref="tabcontrol1" -->
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabclick="tabclick"
      ref="tabcontrol1"
      class="tab-control1"
      v-show="isShow"
    />
    <scroll
      class="content"
      ref="backScroll"
      :probe-type="3"
      @scroll="showScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- 轮播图封装 -->
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad" />
      <home-recommends :recommends="recommends" />
      <home-feature />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabclick="tabclick"
        ref="tabcontrol2"
      />
      <goods-list :goods="goods[currentType].list" />
    </scroll>
    <!-- 组件上的原生事件，必须要在对应多个事件后面加上一个.native修饰符，才能进行监听 -->
    <back-top @click.native="backclick" v-show="isBackTopShow" />
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";

import HomeSwiper from "./childcoms/HomeSwiper";
import HomeRecommends from "./childcoms/HomeRecommends";
import HomeFeature from "./childcoms/HomeFeature";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommends,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      //banners recommends轮播图数据，goods首页商品，currentType商品类型 ，isBackTopShow  返回顶部按钮的显示隐藏，tabOffsetTop  tabcontrol组件到吸顶位置的距离
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isBackTopShow: false,
      tabOffsetTop: 0,
      //isShow 复制的tabcontrol的显示隐藏，saveY 页面离开时的位置
      isShow: false,
      saveY: 0,
    };
  },
  created() {
    //轮播图、轮播图下方数据的请求
    this.getHomeMultiMydata();
    //上拉商品数据(流行、新款、精选)的请求
    this.getHomeMyGoods("pop");
    this.getHomeMyGoods("new");
    this.getHomeMyGoods("sell");
  },
  mounted() {
    //监听GoodsListItem里面图片加载完成,这里要调用一下防抖函数,不频繁使用better-scroll里的refresh方法
    const refresh = debounce(this.$refs.backScroll.refresh, 200);
    this.$bus.$on("HomeGoodsListItem", () => {
      refresh(); //防抖函数中返回的函数
    });
  },
  //activated和deactivated为页面活跃与不活跃状态，记录和设置离开进入时的位置
  activated() {
    //进来时刷新一下,防止出现问题
    this.$refs.backScroll.refresh();
    this.$refs.backScroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    this.saveY = this.$refs.backScroll.getScrollY();
  },
  methods: {
    /**
     * 事件相关方法
     */
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      //吸顶效果中:两个tab-control组件中的index始终保持一致
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
    },
    //返回顶部
    backclick() {
      this.$refs.backScroll.scrollTo(0, 0);
    },
    showScroll(position) {
      //1.返回顶部按钮的显示隐藏
      //如果滚动juli大于1000,就显示
      this.isBackTopShow = -position.y > 1000;
      //2.吸顶功能:如果滚动距离大于this.$refs.tabcontrol2.$el.offsetTop,就显示tab-control1组件
      this.isShow = -position.y >= this.tabOffsetTop;
    },
    //上拉加载更多
    loadMore() {
      this.getHomeMyGoods(this.currentType);
      //调用BScroll对象的scroll属性的finishPullUp()方法,先结束此次上拉加载,然后就可以执行下一次上拉加载
      this.$refs.backScroll.finishPullUp();
    },
    //swiperImgLoad监听轮播图片加载完成
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
    },
    /**
     * 网络请求相关方法
     */
    getHomeMultiMydata() {
      getHomeMultidata().then((res) => {
        // console.log(res) 从这里拿到数据
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeMyGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        //arr1.push(..arr2)数组的解析,数组2加到数组1当中，改变数组1
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
}
#home .home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.tab-control1 {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
</style>