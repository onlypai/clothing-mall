<template>
  <div v-if="Object.keys(detailInfo).length!==0" class="goods-info">
      <div class="info-desc clear-fix">
          <div class="start"></div>
          <div class="desc">{{detailInfo.desc}}</div>
          <div class="end"></div>
      </div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
          <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad">
      </div>
  </div>
</template>


<script>
export default {
    name:'DetailGoodsInfo',
    props:{
        detailInfo:{
            type:Object
        }
    },
    data(){
        return {
            isLoad:0,
            imgLength:0
        }
    },
    methods:{
        imgLoad(){
            //判断，所有图片都加载完了，就执行最后一次就可
            if(++this.isLoad === this.imgLength)
            this.$emit('imageLoad')
        }
    },
    watch:{
        //监听图片的数量,性能好一丢，
        detailInfo(){
            this.imgLength=this.detailInfo.detailImage[0].list.length
        }
    }
}
</script>

<style scoped>
.goods-info{
    padding: 18px;

}
.info-desc{
    position: relative;
}
.info-desc .start{
    height: 2px;
    width: 110px;
    background-color: black;
    position: relative;
}
.info-desc .start::before{
    content: '';
    position: absolute;
    width: 6px;
    height: 5px;
    background-color: black;
    top: -5px;
    left: 0;
}
.info-desc .end{
    height: 2px;
    width: 110px;
    background-color: #333;
    position: absolute;
    bottom: 0;
    right: 0;
}
.info-desc .end::before{
    content: '';
    position: absolute;
    width: 6px;
    height: 5px;
    background-color: #333;
    top: -5px;
    right: 0;
}
.info-desc .desc{
    padding: 10px;
    line-height: 22px;
}
.info-list img{
    width: 100%;
}
  .info-key {
    margin: 10px 0 10px 7px;
    color: #333;
    font-size: 15px;
  }

  .info-list img {
    width: 100%;
  }
</style>