<template lang="pug">
  .header.is-js(:class="{'py-4 px-2': $vuetify.breakpoint.smAndDown, 'py-5': $vuetify.breakpoint.mdAndUp}")
    v-container(
      grid-list-md,
      text-xs-center,
      :class="{'my-5 py-5': $vuetify.breakpoint.mdAndUp}"
    )
      v-layout(
        row,
        justify-center,
        :class="{'my-5 py-5': $vuetify.breakpoint.mdAndUp}"
      )
        v-flex(
          xs12,
          :class="{'py-4': $vuetify.breakpoint.mdAndUp}"
        )
          h1.pb-2
            v-img(
              height="auto",
              width="100%",
              max-height="123px"
              :src="require('@/assets/logo.png')",
              alt="Logo IbagueJS"
              aspect-ratio="1",
              contain
            )
          h2.title.font-weight-regular.black--text {{ subtitle }}
</template>

<script>
export default {
  data() {
    return {
      subtitle: 'Comunidad JavaScript de Ibagué'
    }
  }
}
</script>
