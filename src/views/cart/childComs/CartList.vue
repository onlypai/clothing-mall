<template>
  <div class="cart-list">
      <scroll class="scroll">
        <cart-list-item v-for="(item,index) in $store.state.A_addCart.cartList" :key="index" :item-info="item"/>
      </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem.vue'
export default {
  components: { CartListItem, Scroll },
    name:'CartList'
}
</script>

<style scoped>
.scroll{
  position: absolute;
  top: 44px;
  bottom: 93px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>