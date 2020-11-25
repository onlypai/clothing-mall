<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="'titles' + index"
      class="tab-item"
      :class="{ active: index === currentIndex }"
      @click="itemclick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
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
  methods: {
    itemclick(index) {
      this.currentIndex = index;
      this.$emit("tabclick", index);
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.tab-control .tab-item {
  flex: 1;
  letter-spacing: 4px;
}
.tab-control .tab-item span {
  padding: 4px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>