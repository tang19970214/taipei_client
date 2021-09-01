<template>
  <div class="w-full bg-white flex items-center border-b">
    <div class="w-full text-center px-4 py-3 border-b-2 box-border text-sm" :class="{'border-line text-line': item.id == defaultTab, 'border-white': item.id !== defaultTab}" v-for="item in tabsList" :key="item.id" @click="changeTab(item)">{{item.title}}</div>
  </div>
</template>

<script>
export default {
  props: {
    defaultTab: {
      type: [Number, String],
      required: true,
    },
    tabsList: {
      type: Array,
    },
  },
  methods: {
    changeTab(item) {
      this.$emit("changeTab", item);
    },
  },
};
</script>