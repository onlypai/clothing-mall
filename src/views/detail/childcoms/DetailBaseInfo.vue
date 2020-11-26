<template>
<!-- Object.keys(goods).length !== 0判断goods对象是不是为空，为空就不显示 -->
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price"><s>{{ goods.oldPrice }}</s></span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default(){
          return {}
      }
    },
  },
};
</script>

<style scoped>
.base-info{
    /* border: 1px solid black; */
    padding: 9px;
    border-bottom: 5px solid #f2f5f8;
}
.info-title{
    font-size: 18px;
    color: black;
}
.info-price{
    margin: 10px 0 10px 0;
    position: relative;
}
.info-price .n-price{
    font-size: 24px;
    margin-right: 9px;
    color: var(--color-high-text);
}
.info-price .o-price{
    position: absolute;
    left: 80px;
    bottom: 2px;
    font-size: 14px;
}
.info-price .discount{
    position: absolute;
    left: 128px;
    bottom: 10px;
    padding: 2px 5px;
    border-radius: 100px;
    font-size: 14px;
    color: #fff;
    background-color: var(--color-high-text);
}
.info-other{
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
}
.info-service{
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    height: 60px;
    line-height: 60px;
}
.info-service .info-service-item img{
    width: 15px;
    height: 15px;
    position: relative;
    top: 2px;
}
.info-service .info-service-item span{
    font-size: 13px;
}
</style>