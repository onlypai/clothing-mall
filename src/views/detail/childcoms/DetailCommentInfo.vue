<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment">
    <div class="comment-head">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment-user">
      <div class="comment-user-info">
        <img :src="commentInfo.user.avatar" alt="" />
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <div class="comment-info">
        <p>{{ commentInfo.content }}</p>
        <div class="info-other">
            <!-- 获取准确时间 -->
          <span class="date">{{ commentInfo.created | created-date}}</span>
          <span>{{ commentInfo.style }}</span>
        </div>
        <!-- 有图片才显示 -->
        <div class="info-imgs" v-if="commentInfo.images">
          <img :src="item" v-for="(item, index) in commentInfo.images" :key="index">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {timedate} from 'common/utils'
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
    },
  },
  filters:{
      createdDate(val){
          const date=val*1000
          return timedate(date)
      }
  }
};
</script>

<style scoped>
.comment{   
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
}
.comment-head{
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,.1);

}
.comment-user{
    padding: 10px 0 5px;
}
.comment-user .comment-user-info img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
}
.comment-user .comment-user-info span {
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
  }
  .comment-info{
          padding: 0 5px 15px;
  }
  .comment-info p{
          font-size: 14px;
    color: #777;
    line-height: 1.5;
  }
  .comment-info .info-other{
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
  .comment-info .info-other .date{
      margin-right: 9px;
  }
   .info-imgs {
    margin-top: 10px;
  }

  .info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>