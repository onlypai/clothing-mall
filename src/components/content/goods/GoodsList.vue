<template>
  <div class="goods">
      <goods-list-item v-for="(item,index) in goods" :key="'item'+index" :goodsItem='item'/>
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'
export default {
    name:'GoodsList',
    props:{
        goods:{
            type:Array,
            default:[]
        }
    },
    components:{
        GoodsListItem
    }
}
</script>

<style>
.goods{
    display: flex;
    /* 每个商品先指定宽度48%，但是如果不折行还是会在一行，所以flex-wrap: wrap; */
    flex-wrap: wrap;
    /* justify-content: space-around;均等分 */
    justify-content: space-around;
    padding: 3px;
}
</style>