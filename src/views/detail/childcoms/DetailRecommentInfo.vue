<template>
  <div>
    <h5>-&nbsp;看了又看&nbsp;-</h5>
    <div class="recom-goods">
      <goods-list-item
        v-for="(item, index) in recommendInfo"
        :key="'item' + index"
        :goodsItem="item"
      />
    </div>
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem";
export default {
  components: { GoodsListItem },
  name: "DetailRecommentInfo",
  props: {
    recommendInfo: {
      type: Array,
    },
  },
};
</script>

<style>
h5{
    line-height: 30px;
    width: 100%;
    text-align: center;
}
.recom-goods {
  display: flex;
  /* 每个商品先指定宽度48%，但是如果不折行还是会在一行，所以flex-wrap: wrap; */
  flex-wrap: wrap;
  /* justify-content: space-around;均等分 */
  justify-content: space-around;
  padding: 3px;
}
</style>