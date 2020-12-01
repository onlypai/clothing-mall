<template>
  <div class="goods-item" @click="itemClick">
    <!-- 计算属性获取图片,兼容推荐图片 -->
    <img v-lazy="getImg" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default: {},
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("HomeGoodsListItem");
    },
    itemClick() {
      //详情页商品没有iid，无法点击
      if (this.goodsItem.iid!==undefined)
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
  computed: {
    getImg() {
      return (
        this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      );
    },
  },
};
</script>

<style>
.goods-item {
  padding-bottom: 40px;
  position: relative;

  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 3px;
}
.goods-item .goods-info {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  font-size: 12px;
  text-align: center;
}
.goods-item .goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;
}
.goods-item .goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-item .goods-info .collect {
  position: relative;
}
.goods-item .goods-info .collect::before {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  left: -15px;
  top: -1px;
  background: url(~assets/img/common/collect.svg) 0 0/14px 14px;
}
</style>