<template lang="pug">
  #app(:class="{ loaded: loader }")
    base-loader
    the-header
    router-view
    the-footer
</template>

<script>
import BaseLoader from '@/components/base/BaseLoader.vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

export default {
  components: {
    BaseLoader,
    TheHeader,
    TheFooter
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
