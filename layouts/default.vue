<template>
  <div>
    <Header />

    <div class="w-full min-h-screen pt-14">
      <Nuxt />
    </div>

    <Footer />
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions(['initAuth'])
  },
  mounted() {
    console.log('initAuth');
    this.initAuth()
  },
}
</script>