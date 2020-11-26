<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 1,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    //监听滚动距离   //判断一下,更加严谨
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }

    //上拉加载更多  //判断一下,更加严谨
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },

  methods: {
    //封装返回顶部的方法
    scrollTo(x, y, time = 650) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    //封装上拉加载结束的方法
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    //封装refresh方法
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    //封装获取scroll.y属性为方法(页面位置)
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  },
};
</script>

<style>
</style>