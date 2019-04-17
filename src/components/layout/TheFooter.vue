<template lang="pug">
  section.section.has-text-centered.has-background-js
    .container
      a.button.is-js.has-text-dark(
        v-for="link in links"
        :key="link.id"
        :href="link.url"
        target="_blank"
      )
        span.icon.is-small
          i(:class="link.icon")
</template>

<script>
export default {
  data() {
    return {
      links: [
        { id: 1, url: 'https://twitter.com/IbagueJS', icon: 'fab fa-twitter' },
        { id: 2, url: 'https://meetup.com/IbagueJS', icon: 'fab fa-meetup' },
        { id: 3, url: 'https://goo.gl/KKgcce', icon: 'fab fa-slack' },
        { id: 4, url: 'https://github.com/IbagueJS', icon: 'fab fa-github' }
      ]
    }
  }
}
</script>
