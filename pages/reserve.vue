<template>
  <div class="w-full min-h-page">
    <!-- phone -->
    <div class="block md:hidden w-full h-full">
      <!-- switch -->
      <div class="w-full py-2 px-4 bg-white">
        <div class="w-full flex items-center rounded border border-line text-center">
          <div class="w-full p-2 text-xs" :class="{'text-white bg-line': item.id == defaultSwitch, 'text-line': item.id !== defaultSwitch}" v-for="item in switchList" :key="item.id" @click="changeSwitch(item)">{{item.title}}</div>
        </div>
      </div>

      <Nuxt-child />
    </div>

    <!-- web -->
    <div class="hidden md:block w-full h-full"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   defaultTab: 1,
      //   tabsList: [
      //     { id: 1, title: "長照", pathName: "reserve" },
      //     { id: 2, title: "共享車隊", pathName: "reserve-share" },
      //     { id: 3, title: "巴士", pathName: "reserve-bus" },
      //   ],

      defaultSwitch: 1,
      switchList: [
        { id: 1, title: "預約訂車", pathName: "reserve-index" },
        { id: 2, title: "快速叫車", pathName: "reserve-quick" },
      ],
    };
  },
  methods: {
    // 切換tab
    changeSwitch(item) {
      this.defaultSwitch = item.id;
      this.$router.push({ name: item.pathName });
    },
  },
};
</script>