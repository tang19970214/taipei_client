<template>
  <div class="w-full fixed bottom-0 z-40">
    <!-- phone -->
    <div class="block md:hidden h-12">
      <div class="relative w-full h-full bg-white flex items-end justify-around">

        <div class="w-full h-full box-border flex items-center justify-center flex-col border-b-2" :class="{'border-line': item.pathName == $route.name, 'border-white': item.pathName !== $route.name}" v-for="item in phoneMenu" :key="item.id" @click="$router.push({name: item.pathName})">
          <img v-if="item.pathName == $route.name" :src="item.menuImg_hover" :alt="item.title" width="20px">
          <img v-else :src="item.menuImg" :alt="item.title" width="20px">
          <span class="text-sm" :class="{'text-line': item.pathName == $route.name, 'text-gray-500': item.pathName !== $route.name}">{{item.title}}</span>
        </div>
      </div>
    </div>

    <!-- web -->
    <div class="hidden md:block w-full h-full"></div>
  </div>
</template>

<script>
import LogoTitle from "../components/svg/LogoTitle.vue";

export default {
  components: { LogoTitle },
  data() {
    return {
      phoneMenu: [
        {
          id: 1,
          menuImg: require("../static/images/menu/news.svg"),
          menuImg_hover: require("../static/images/menu/news_hover.svg"),
          title: "最新消息",
          pathName: "news",
        },
        {
          id: 2,
          menuImg: require("../static/images/menu/reserve.svg"),
          menuImg_hover: require("../static/images/menu/reserve_hover.svg"),
          title: "預約訂車",
          pathName: "reserve",
        },
        {
          id: 3,
          menuImg: require("../static/images/menu/record.svg"),
          menuImg_hover: require("../static/images/menu/record_hover.svg"),
          title: "訂單檢視",
          pathName: "record",
        },
        {
          id: 4,
          menuImg: require("../static/images/menu/user.svg"),
          menuImg_hover: require("../static/images/menu/user_hover.svg"),
          title: "用戶資料",
          pathName: "user",
        },
      ],
    };
  },
};
</script>