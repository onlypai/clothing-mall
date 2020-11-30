import { debounce } from "common/utils";
export const itemListenerMixin = {
    mounted() {
        //监听GoodsListItem里面图片加载完成,这里要调用一下防抖函数,不频繁使用better-scroll里的refresh方法
        const refresh = debounce(this.$refs.backScroll.refresh, 200)
        this.$bus.$on("HomeGoodsListItem", () => {
            refresh(); //防抖函数中返回的函数
        })
    },
}


import BackTop from "components/content/backtop/BackTop.vue";
//返回顶部相关代码使用混入
export const backTop = {
    components: {
        BackTop
    },
    data() {
        return {
            isBackTopShow: false

        }
    },
    methods: {
        backclick() {
            this.$refs.backScroll.scrollTo(0, 0);
        },
        backTopListener(position) {
            //如果滚动juli大于1000,就显示
            this.isBackTopShow = -position.y > 1000;
        }
    }
}