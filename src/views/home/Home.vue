<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <!-- 轮播图封装 -->
    <home-swiper :banners="banners" />
    <home-recommends :recommends="recommends" />
    <home-feature />
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control" @tabclick="tabclick"/>
    <goods-list :goods="goods[currentType].list" />
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "network/home";

import HomeSwiper from "./childcoms/HomeSwiper";
import HomeRecommends from "./childcoms/HomeRecommends";
import HomeFeature from "./childcoms/HomeFeature";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommends,
    HomeFeature,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
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
  methods: {
    /**
     * 事件相关方法
     */
    tabclick(index) {
      switch(index){
        case 0:
          this.currentType='pop'
          break
        case 1:
          this.currentType='new'
          break
        case 2:
          this.currentType='sell'
          break
      }
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

<style>
#home {
  padding-top: 44px;
}
#home .home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 9;
}
</style>