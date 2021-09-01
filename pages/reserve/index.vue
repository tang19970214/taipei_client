<template>
  <div>
    <!-- tabs -->
    <Tabs :tabsList="tabsList" :defaultTab="defaultTab" @changeTab="changeTab" />

    <div class="w-full min-h-reservePage bg-gray-300">
      <Nuxt-child />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultTab: 1,
      tabsList: [
        { id: 1, title: "長照", pathName: "reserve-index" },
        { id: 2, title: "共享車隊", pathName: "reserve-index-share" },
        { id: 3, title: "巴士", pathName: "reserve-index-bus" },
      ],
    };
  },
  methods: {
    changeTab(item) {
      this.defaultTab = item.id;
      this.$router.push({ name: item.pathName });
    },
  },
};
</script>