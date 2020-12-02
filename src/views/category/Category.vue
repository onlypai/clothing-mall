<template>
  <div>
    <nav-bar class="nav-bar">
        <template v-slot:center class="center">商品分类</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  components: { NavBar },
    name:'Category'
}
</script>

<style>
</style>