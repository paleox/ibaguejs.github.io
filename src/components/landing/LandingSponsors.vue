<template lang="pug">
  section.section.has-text-centered
    .container
      h1.title Patrocinadores
      .columns.is-mobile.is-centered
        .column.is-one-third-desktop(
          v-for="sponsor in sponsors"
          :key="sponsor.id"
        )
          a(
            :href="sponsor.page",
            target="_blank"
          )
            figure.image
              img(
                style="max-height: 250px;"
                :src="sponsor.image"
              )
</template>

<script>
export default {
  data() {
    return {
      sponsors: [
        {
          id: 1,
          page: 'https://nodesource.com/',
          image: require('@/assets/node-source.png')
        },
        {
          id: 2,
          page: 'https://colombia-dev.org',
          image: require('@/assets/colombia-dev.svg')
        },
        {
          id: 3,
          page: 'http://www.sti.org.co/',
          image: 'http://www.sti.org.co/images/plantilla/logo-sti.png'
        }
      ]
    }
  }
}
</script>
