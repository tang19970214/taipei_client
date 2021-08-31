<template>
  <transition :duration="600">
    <div div class="relative w-ful h-screen top-0 max-h-screen" v-show="overlay">
      <transition name="moveR">
        <div class="absolute top-0 left-0 w-48 h-full bg-white z-50" v-if="overlay">
          123
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