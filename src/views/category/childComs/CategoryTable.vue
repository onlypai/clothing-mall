<template>
  <div class="category-table">
    <div v-for="(item, index) in categoryTable" :key="index" class="table-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryTable",
  props: {
    categoryTable: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.category-table {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
}
.table-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 80px;
  height: 100px;
  margin-bottom: 10px;
}
a img {
  width: 65px;
  margin-bottom: 7px;
}
a p {
  font-size: 14px;
  text-align: center;
}
</style>