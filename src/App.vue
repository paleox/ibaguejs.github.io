<template lang="pug">
  v-app(dark)
    v-content(:class="{ loaded: loader }")
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
.theme--dark.application {
  background-color: #1f2424;
  .is-js,
  .has-background-js {
    background: #ffe400 !important;
    border-color: #ffe400 !important;
  }
  .has-background-js-primary {
    background: #375a7f !important;
    border-color: #375a7f !important;
  }
  a {
    text-decoration: none;
  }
  .v-chip {
    .v-chip__content {
      cursor: pointer;
    }
  }
}
</style>
