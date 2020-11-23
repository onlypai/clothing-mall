<template>
  <div class="tab-bar-item" @click="handleclick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
       <div v-else><slot name="item-icon02"></slot></div>
      <!-- <div :class='{active:isActive}'><slot name="item-text"></slot></div> -->
      <div :style=activeStyle><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'rgb(226, 43, 180)'
    }
  },
    computed:{
        isActive(){
            //使用计算属性：看this.path四个路由path的字符 哪一个在this.$route.path活跃的那个路由的path字符 内
            return this.$route.path.indexOf(this.path)!==-1 //不等于-1就表示存在
        },
        activeStyle(){
          return this.isActive?{color:this.activeColor}:{}
        }
    },
  methods:{
      handleclick(){
          this.$router.push('/location').catch(err => { console.log(err)})//网上找的看不懂，加这一句连续点两次就不会报错
          this.$router.replace(this.path)
      }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  /* 高度一般都是49px */
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin: 2px 0;
  vertical-align: middle;
  /* vertical-align可以去掉图片下方默认的3像素 */
}
</style>