<template>
  <div>
      <cart-list-item v-for="(item,index) in $store.state.A_addCart.cartList" :key="index" :item-info="item"/>
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'
export default {
  components: { CartListItem },
    name:'CartList'
}
</script>

<style>

</style>