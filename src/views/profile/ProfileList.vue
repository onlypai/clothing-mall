<template>
  <div class="profile-list">
    <div class="list">
      <div class="list-item">
        <img src="~assets/img/profile/message.svg" alt="" />
        <div>我的消息</div>
      </div>
      <div class="list-item">
        <img src="~assets/img/profile/pointer.svg" alt="" />
        <div>积分商城</div>
      </div>
      <div class="list-item">
        <img src="~assets/img/profile/vip.svg" alt="" />
        <div>会员卡</div>
      </div>
    </div>
    <div class="list">
      <div class="list-item">
        <img src="~assets/img/profile/cart.svg" alt="" />
        <div>我的购物车</div>
      </div>
      <div class="list-item">
        <img src="~assets/img/profile/shopping.svg" alt="" />
        <div>下载购物APP</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileList",
};
</script>

<style scoped>
.list{
    border-top: 15px solid rgb(243, 243, 243);
    padding: 7px 0 0 12px;
    width: 100vw;
}
.list-item {
  height: 35px;
  width: 100%;
  display: flex;
}
.list-item img {
  width: 22px;
  height: 22px;
  margin: 2px 7px 3px 0;
  vertical-align: middle;
}
.list-item div{
    padding: 6px 0 0 2px;
    width: 100%;
    border-bottom: 2px solid rgb(243, 243, 243);
}
.list-item:last-child div{
    border-bottom: none;

}
</style>