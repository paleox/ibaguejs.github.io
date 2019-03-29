<template lang="pug">
  #app(:class="{ loaded: loader }")
    app-loader
    app-header
    router-view
    app-footer
</template>

<script>
import AppLoader from '@/components/shared/AppLoader.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

export default {
  components: {
    AppLoader,
    AppHeader,
    AppFooter
  },
  data() {
    return {
      loader: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.loader = true
    }, 2000)
  }
}
</script>

<style lang="scss">
.is-js,
.has-background-js {
  background: #ffe400 !important;
  border-color: #ffe400 !important;
}

.has-background-js-primary {
  background: #375a7f !important;
  border-color: #375a7f !important;
}

.has-padding {
  padding-left: 5%;
  padding-right: 7%;
}

.image-128x128 {
  width: 128px !important;
  height: 128px !important;
  margin-left: 5px;
}
@import '@/scss/main.scss';
</style>
