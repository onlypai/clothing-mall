<template>
    <div class="recommends">
        <div v-for="(item,index) in recommends" :key="'recommends'+index" class="recommendsitem">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeRecommends',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.recommends{
    display: flex;
    padding: 10px 0 20px;
    border-bottom: 10px solid rgb(238, 237, 239);
}
.recommends .recommendsitem{
    flex: 1;
    font-size: 12px;
    text-align: center;
}
.recommends .recommendsitem img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}
</style>