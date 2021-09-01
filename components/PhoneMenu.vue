<template>
  <transition :duration="300">
    <div div class="relative w-ful h-screen top-0 max-h-screen" v-show="overlay">
      <transition name="moveR">
        <div class="absolute top-0 left-0 w-48 h-full bg-white z-50" v-if="overlay">
          <!-- 這邊是使用者資訊與登入登出 -->
          <div class="">
            <span>HI! 王大帥</span>
            <button>登出</button>
          </div>
          <!-- 路由 -->
          <div>
            <NuxtLink to="contact">聯繫客服</NuxtLink>
            <NuxtLink to="qAndA">常見問題</NuxtLink>
          </div>
          <!-- 這邊是聯絡資訊 -->
          <div class="grid grid-cols-2">
            <div class="col-span-2">1</div>
            <div class="col-span-2">2</div>
            <div class="col-span-2">3</div>
            <div class="col-span-2">4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
          </div>
        </div>
      </transition>
      <transition name="opacityTransition">
        <div class="bg-gray-700 opacity-75 fixed top-14 left-0 w-full min-h-page z-40" v-if="overlay" @click.self="closeOverlay"></div>
      </transition>
    </div>
  </transition>
</template>
<script>

export default {
  props: {
    overlay: {
      type: Boolean,
      required: true,
    },
  },
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
    }
  },
  methods: {
    closeOverlay() {
      this.$emit("closeOverlay");
    },
  },
};
</script>

<style lang="scss" scoped>
.overlayBg {
  background: rgba($color: #444, $alpha: 0.7);
}
</style>