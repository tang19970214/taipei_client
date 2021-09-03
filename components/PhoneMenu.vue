<template>
  <transition :duration="300">
    <div div class="relative w-ful h-screen top-0 max-h-screen" v-show="overlay">
      <transition name="moveR">
        <div class="absolute top-0 left-0 w-60 h-full bg-white z-50" v-if="overlay">
          <!-- 這邊是使用者資訊與登入登出 -->
          <div class="pt-2 w-full flex items-center justify-center">
            <span class="pr-4 text-base text-third">HI! {{'王大帥'}}</span>
            <button class="text-sm flex items-center justify-center">
              <span class="ml-2" v-if="isAuthenticated" @click="doLogout"><LoginSvg />登出</span>
              <span class="ml-2" v-else @click="closeOverlay();$router.push({name: 'index'})"><LoginSvg />登入</span>
            </button>
          </div>
          <!-- 路由 -->
          <div class="pt-6">
            <NuxtLink to="contact" class="block flex items-center pl-6 leading-10 text-sm" @click.native="closeOverlay()"><ContactSvg /><span class="pl-2">聯繫客服</span></NuxtLink>
            <NuxtLink to="qAndA" class="block flex items-center pl-6 leading-10 text-sm" @click.native="closeOverlay()"><QAndASvg /><span class="pl-2">常見問題</span></NuxtLink>
          </div>
          <!-- 這邊是聯絡資訊 -->
          <div class="grid grid-cols-2">

            <div class="col-span-2 pt-9 text-third text-base text-center">
              <label class="relative inline-block decorate">
                <BuildingSvg class="mr-4 align-text-top"/>
                <span class="font-bold">台北市政府資訊</span>
              </label>
            </div>
            <div class="col-span-2 pl-2 text-sm">
              <div class="font-semibold text-xs text-grayOpc85">地址:</div>
              <div><LocationSvg class="text-black"/><span class="text-grayOpc6">台北市自由路527號</span></div>
              <div class="font-semibold text-xs text-grayOpc85 leading-5">辦公時間:</div>
              <div class="grid grid-cols-2">
                <div class="row-span-2 text-grayOpc6">週一至週五</div>
                <div class="text-line text-sm font-bold"><ClockSvg />08:00~12:00</div>
                <div class="text-line text-sm font-bold"><ClockSvg />13:30~17:30</div>
                <div class="font-semibold text-xs text-grayOpc85 leading-5">總機電話:</div>
                <div class="text-line text-sm font-bold"><PhoneSvg />(08)732-0415</div>
              </div>
            </div>

            <div class="col-span-2 text-sm border-dashed border-t mt-4 border-gray pt-4">
              <div class="col-span-2 text-center">
                  <span class="font-bold text-sm text-orange">1999便民服務專線</span>
                  <span class="font-bold text-sm text-cusRed">(付費專線)</span>
              </div>
              
              <div class="col-span-2 pl-2 text-sm">
                <div class="font-semibold text-xs text-grayOpc85 leading-5">服務時間:</div>
                <div class="grid grid-cols-2">
                  <div class="text-grayOpc6">每日</div>
                  <div class="text-line text-sm font-bold"><ClockSvg />08:00~22:00</div>
                  <div class="font-semibold text-xs text-grayOpc85 leading-5">縣境內直撥:</div>
                  <div class="text-line text-sm font-bold"><PhoneSvg />(08)732-0415</div>
                  <div class="font-semibold text-xs text-grayOpc85 leading-5">外縣市請撥:</div>
                  <div class="text-line text-sm font-bold"><PhoneSvg />(08)732-0415</div>
                </div>
              </div>
            </div>

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
import QAndASvg from "./svg/QAndASvg";
import ContactSvg from "./svg/ContactSvg";
import BuildingSvg from "./svg/BuildingSvg";
import LocationSvg from "./svg/LocationSvg";
import ClockSvg from "./svg/ClockSvg";
import PhoneSvg from "./svg/PhoneSvg";
import LoginSvg from "./svg/LoginSvg";

import {mapGetters, mapActions} from 'vuex'

export default {
  components: {
    QAndASvg, ContactSvg, BuildingSvg, LocationSvg, ClockSvg, PhoneSvg, LoginSvg
  },
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
    ...mapActions(['logout']),
    closeOverlay() {
      this.$emit("closeOverlay");
    },
    doLogout() {
      this.$swal.fire({
        icon: 'question',
        title: '確定要登出嗎?',
        confirmButtonText: '確認',
        cancelButtonText: '取消',
        focusConfirm: true,
        showCancelButton: true,
        reverseButtons: true
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.logout()
          this.closeOverlay()
          this.$router.push({name: 'index'})
        }
      })
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
};
</script>

<style lang="scss" scoped>
.overlayBg {
  background: rgba($color: #444, $alpha: 0.7);
}
.decorate{
  &::before,&::after{
    position: absolute;
    content: '';
    display: block;
    top: 50%;
    height: 1px;
    width:22px;
    background-color: #4db8be;
  }
  &::before{
    @apply -left-7;
  }
  &::after{
    @apply -right-7;
  }
  
}
</style>