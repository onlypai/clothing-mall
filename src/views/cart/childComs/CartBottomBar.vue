<template>
  <div class="bottom">
    <div class="check-button">
      <div class="button"><check-button :isActived='isSelectAll' @click.native="select"/></div>
      <div class="text">全选</div>
    </div>
    <div class="price">合计：￥{{ totalPrice }}</div>
    <div class="count">去计算({{ totalCount }})</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
export default {
  components: { CheckButton },
  name: "CartBottomBar",
  computed: {
    totalPrice() {
      return this.$store.state.A_addCart.cartList
        .filter((item) => item.isChecked)
        .reduce((tPrice, item) => tPrice + item.realprice * item.count, 0)
        .toFixed(2);
    },
    totalCount(){
        return this.$store.state.A_addCart.cartList
        .filter(item=> item.isChecked).length
    },
    isSelectAll(){
      if(this.$store.state.A_addCart.cartList.length===0) return false//购物车为空，默认不选中
      return !this.$store.state.A_addCart.cartList.find(item=>!item.isChecked)//只要有一个没有选中，全选按钮就不亮
    }
  },
  methods:{
    //全选按钮点击事件
    select(){
      if(this.isSelectAll){//如果全部选中，就把isChecked属性设置为假
        this.$store.state.A_addCart.cartList.forEach(item =>item.isChecked=false);
      } else{
        this.$store.state.A_addCart.cartList.forEach(item =>item.isChecked=true);
      }
    }
  }
};
</script>

<style scoped>
.bottom {
  height: 44px;
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  font-size: 16px;
}
.check-button {
  width: 74px;
  align-items: center;
  display: flex;
}
.check-button div {
  flex: 1;
}
.check-button .button {
  margin-left: 10px;
  overflow: hidden;
}
.price {
  line-height: 44px;
}
.count {
  padding-right: 10px;
  line-height: 44px;
  width: 90px;
  text-align: center;
  background-color: lightcoral;
}
</style>