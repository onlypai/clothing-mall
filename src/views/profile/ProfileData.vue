<template>
  <div class="profile-data">
    <div class="data">
      <div>
        <div class="top"><span>0.00</span>元</div>
        <div class="bottom">我的余额</div>
      </div>
    </div>
    <div class="data">
      <div>
        <div class="top"><span>0.00</span>个</div>
        <div class="bottom">我的优惠</div>
      </div>
    </div>
    <div class="data">
      <div>
        <div class="top"><span>0.00</span>分</div>
        <div class="bottom">我的积分</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileData",
};
</script>

<style scoped>
.profile-data {
  height: 72px;
  display: flex;
}
.profile-data .data {
  flex: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-size: 14px;
  border-right: 2px solid rgb(243, 243, 243);
}
.top{
margin-top: 18px;
}
.top span{
    color: orangered;
    font-size: 19px;
}
.profile-data .data:last-child {
  border-right: none;
}
</style>