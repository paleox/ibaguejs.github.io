<template lang="pug">
  section.hero.is-js.is-large
    .hero-body
      .container.has-text-centered
        h1.title.has-text-dark
          img(src="@/assets/logo.png", alt="Logo IbagueJS")
        h2.subtitle.has-text-dark {{ subtitle }}
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
