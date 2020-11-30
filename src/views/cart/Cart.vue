<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <template v-slot:center>购物车{{ cartLength }}</template>
    </nav-bar>
    <!-- 购物车商品 -->
    <scroll class="scroll">
      <cart-list/>
    </scroll>
    <!-- 底部导航 -->
    <cart-bottom-bar class="bottom"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import NavBar from "components/common/navbar/NavBar.vue";
import CartList from './childComs/CartList.vue';
import CartBottomBar from './childComs/CartBottomBar.vue';
import Scroll from '../../components/common/scroll/Scroll.vue';
export default {
  components: { NavBar, CartList, CartBottomBar, Scroll },
  name: "Cart",
  computed: {
    ...mapGetters(['cartLength']),
  },
};
</script>

<style scoped>
.cart{
  height: 100vh;
  position: relative;
}
  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
.scroll{
  position: absolute;
  top: 44px;
  bottom: 93px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.bottom{
  position: fixed;
  bottom: 49px;
left: 0;
right: 0;
}
</style>