<template>
  <div class="w-full h-14 fixed top-0 z-20">
    <!-- phone -->
    <div class="block md:hidden h-full">
      <div class="relative w-full h-full bg-primary flex items-center justify-center">
        <div @click="overlay = !overlay">
          <Menu class="absolute left-4 top-0 h-full" />
        </div>

        <div class="flex items-center justify-center">
          <LogoTitle />
        </div>

        <div v-if="!isAuthenticated" class="absolute top-0 right-4 h-full flex items-center" @click="$router.push('/')">
          <img src="../static/images/login.svg" alt="登入" width="16px">
          <p class="text-white text-sm pl-1">登入</p>
        </div>
      </div>
    </div>

    <PhoneMenu :overlay="overlay" @closeOverlay="overlay = false" />

    <!-- web -->
    <div class="hidden md:block w-full h-full"></div>
  </div>
</template>

<script>
import Menu from "./svg/Menu";
import LogoTitle from "./svg/LogoTitle";

import {mapGetters} from 'vuex'

export default {
  components: { Menu, LogoTitle },
  data() {
    return {
      overlay: false,
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
};
</script>