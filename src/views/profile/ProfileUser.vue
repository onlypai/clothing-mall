<template>
  <div class="profile-user">
      <div class="left">
          <img src="~assets/img/profile/avatar.svg" alt="">
      </div>
      <div class="right">
          <div class="login">
              <div class="top">登录/注册</div>
              <div class="bottom">
                  <span><img src="~assets/img/profile/phone.svg" alt=""></span>
                  <span>暂无绑定手机号</span>
              </div>
          </div>
          <div class="arrow">&gt;</div>
      </div>
  </div>
</template>

<script>
export default {
name:'ProfileUser'
}
</script>

<style scoped>
.profile-user{
    height: 70px;
    background-color: var(--color-tint);
    color: #fff;
    display: flex;
}
.left{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.left img{
    width: 58px;
    height: 58px;
}
.right{
    width: 80%;
    display: flex;

}
.right .login{
    width: 90%;
    font-size: 15px;
}
.right .arrow{
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.top{
    height: 47%;
    padding-top:13px ;
    margin-left: 5px;

}
.bottom{
    height: 53%;
    padding-top:3px ;
}
.bottom span{
    font-size: 13px;
}
.bottom span img{
    width: 18px;
    height: 18px;
    vertical-align: middle;
}
</style>