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