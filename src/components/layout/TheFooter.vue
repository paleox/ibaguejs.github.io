<template lang="pug">
  v-footer(height="auto", class="has-background-js text-xs-center py-4")
    v-layout.py-3(row, justify-center)
      v-flex(xs12)
        v-btn(
          v-for="link in links",
          :key="link.id",
          :href="link.url",
          target="_blank",
          class="mx-3 black--text",
          icon
        )
          v-icon(size="18px") {{ link.icon }}
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          url: 'https://facebook.com/Ibaguejs.co',
          icon: 'fab fa-facebook'
        },
        { id: 2, url: 'https://twitter.com/IbagueJS', icon: 'fab fa-twitter' },
        { id: 3, url: 'https://meetup.com/IbagueJS', icon: 'fab fa-meetup' },
        { id: 4, url: 'https://goo.gl/KKgcce', icon: 'fab fa-slack' },
        { id: 5, url: 'https://github.com/IbagueJS', icon: 'fab fa-github' }
      ]
    }
  }
}
</script>
