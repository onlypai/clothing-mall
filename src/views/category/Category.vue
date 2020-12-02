<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <template v-slot:center class="center">商品分类</template>
    </nav-bar>
    <scroll class="scroll1">
      <category-list
        :category-list="categoryList"
        class="list"
        @itemclick="itemclick"
      />
    </scroll>
    <scroll class="scroll2">
      <category-table class="table" :category-table="categoryTable" />
      <tab-control :titles="titleList" @tabclick="tabclick"/>
      <goods-list :goods="categoryGoods"/>
    </scroll>
  </div>
</template>

<script>
import {
  getCategoryList,
  getCategoryTable,
  getCategoryGoods,
} from "network/category";

import NavBar from "components/common/navbar/NavBar.vue";
import CategoryList from "./childComs/CategoryList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import CategoryTable from "./childComs/CategoryTable";
import TabControl from "components/content/tabcontrol/TabControl.vue";
import GoodsList from 'components/content/goods/GoodsList.vue';

export default {
  components: {
    NavBar,
    CategoryList,
    Scroll,
    CategoryTable,
    TabControl,
    GoodsList,
  },
  name: "Category",
  data() {
    return {
      //左边分类名字列表
      categoryList: [],
      //右边商品头像
      categoryTable: [],
      //tabcontrol
      titleList: ["流行", "新款", "精选"],
      currentIndex: 0,
      //商品数据
      categoryGoods:[]
    };
  },
  methods: {
    itemclick(index) {
      this.currentIndex=index
      this.getCategoryTable(this.categoryList[this.currentIndex].maitKey);
      this.getCategoryGoods(this.categoryList[this.currentIndex].miniWallkey, "pop")
    },
    tabclick(index){
      const typeList = ["pop", "new", "sell"];
      this.getCategoryGoods(this.categoryList[this.currentIndex].miniWallkey, typeList[index])
    },


/**
 * 请求数据相关方法
 */
    getCategoryList(){
      //请求分类页面相关数据
      getCategoryList().then((res) => {
      console.log(res);
      this.categoryList = res.data.category.list;
      //nextTick（）：dom生成之后在获取dom对象
      this.$nextTick(() => {
        this.getCategoryTable(this.categoryList[0].maitKey);
        this.getCategoryGoods(this.categoryList[0].miniWallkey, "pop");
      });
    })
    },

    getCategoryGoods(miniWallkey, type) {
      //请求商品
      getCategoryGoods(miniWallkey, type).then((res) => {
        console.log(res);
        this.categoryGoods=res
      });
    },

    getCategoryTable(maitKey){
      //请求右边分类商品中的列表商品
      getCategoryTable(maitKey).then((res) => {
          console.log(res);
          this.categoryTable = res.data.list;
        })
    }
  },
  created() {
    //请求分类页面相关数据
    this.getCategoryList();
  },
};
</script>

<style scoped>
.category {
  width: 100vw;
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.scroll1 {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  overflow: hidden;

  width: 24%;
}
.scroll2 {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  overflow: hidden;

  width: 76%;
}
</style>