<template>
  <swiper class="swipers">
      <swiper-item v-for="(item,index) in topImages" :key="'item'+index">
          <img :src="item" alt="">
      </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  components: { Swiper,SwiperItem },
    name:'DetailSwiper',
    props:{
        topImages:{
            type:Array,
            default(){
              return []
            }
        }
    },
}
</script>

<style>
.swipers{
  height: 300px;
}
</style>