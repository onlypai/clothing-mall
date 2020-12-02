<template>
  <div>
    <div
      v-for="(item, index) in categoryList"
      :key="index"
      class="categorylist"
      :class="{ active: index === currentIndex }"
      @click="itemclick(index)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods:{
    itemclick(index){
      this.currentIndex=index
      this.$emit('itemclick',index)
    }
  }
};
</script>

<style scoped>
.categorylist {
  font-size: 14px;
  line-height: 45px;
  width: 100px;
  height: 45px;
  user-select: none;
  text-align: center;
  color: #666666;
  outline: none;
  background: none;
}
.active {
  font-weight: 700;
  color: #ff5777;
  border-left: 3px solid #ff5777;
  background-color: #ffffff;
}
</style>