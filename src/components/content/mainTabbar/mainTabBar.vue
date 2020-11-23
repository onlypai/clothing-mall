<template>
  <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-icon ><img src="~assets/img/tabbar/home01.svg" alt=""/></template>
        <template v-slot:item-icon02 ><img src="~assets/img/tabbar/home02.svg" alt=""/></template>
        <template v-slot:item-text><div>首页</div></template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:item-icon ><img src="~assets/img/tabbar/class01.svg" alt=""/></template>
        <template v-slot:item-icon02><img src="~assets/img/tabbar/class02.svg" alt="" /></template>
        <template v-slot:item-text><div>分类</div></template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:item-icon><img src="~assets/img/tabbar/car01.svg" alt="" /></template>
        <template v-slot:item-icon02><img src="~assets/img/tabbar/car02.svg" alt="" /></template>
        <template v-slot:item-text><div>购物车</div></template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon><img src="~assets/img/tabbar/me01.svg" alt="" /></template>
        <template v-slot:item-icon02><img src="~assets/img/tabbar/me02.svg" alt="" /></template>
        <template v-slot:item-text><div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";//这里用到了别名
import TabBarItem from "components/common/tabbar/TabBarItem";



export default {
    name:'mainTabBar',
    components:{
         TabBar,
        TabBarItem,
    }
}
</script>

<style>

</style>