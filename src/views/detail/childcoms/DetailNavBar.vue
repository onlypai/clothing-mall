<template>
  <div>
    <nav-bar>
      <template v-slot:left><div class="back" @click="backclick"><img src="~assets/img/common/back.svg" alt=""></div></template>
      <template v-slot:center>
        <div class="title">
          <div
            v-for="(item, index) in titles"
            :key="'item' + index"
            class="titleItem" :class="{active:index===currentIndex}" @click="itemclick(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex:0
    }
  },
  methods:{
      itemclick(index){
          this.currentIndex=index
      },
      backclick(){
          this.$router.back()
      }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 15px;
}
.title .titleItem {
  flex: 1;
}
.active{
    color: var(--color-high-text);
}
.back img{
    margin-top: 12px;
}
</style>