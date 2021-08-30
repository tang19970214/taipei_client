<template>
  <transition name="moveR" v-if="overlay">
    <div class="overlayBg fixed top-14 left-0 w-full min-h-page z-40" @click.self="closeOverlay">
      <div class="absolute top-0 left-0 w-48 h-full bg-white z-50">
        123
      </div>
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