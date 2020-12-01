<template>
  <div class="icon-selector" :class="{active:isActived}">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
    name:'CheckButton',
    props:{
        isActived:{
            trpe:Boolean,
            default:false
        }
    }
}
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }

  .active {
    background-color: var(--color-high-text);
    border-color: var(--color-high-text);
 }
</style>