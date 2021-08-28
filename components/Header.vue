<template>
  <div class="w-full h-14 fixed top-0 z-40">
    <!-- phone -->
    <div class="block md:hidden h-full">
      <div class="relative w-full h-full bg-primary flex items-center justify-center">
        <Menu class="absolute left-4 top-0 h-full" />

        <div class="flex items-center justify-center">
          <LogoTitle />
        </div>
      </div>
    </div>

    <!-- web -->
    <div class="hidden md:block w-full h-full"></div>
  </div>
</template>

<script>
import Menu from "./svg/Menu";
import LogoTitle from "./svg/LogoTitle";

export default {
  components: { Menu, LogoTitle },
};
</script>