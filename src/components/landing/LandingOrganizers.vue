<template lang="pug">
  .organizers
    v-container.text-xs-center(grid-list-md)
      v-layout(row, wrap, justify-center)
        v-flex(xs12)
          h2.display-1.pb-3 Equipo Organizador
        v-flex(
          xs12,
          sm4,
          v-for="organizer in organizers"
          :key="organizer.id"
        )
          v-card.ma-3(flat, :href="organizer.group_profile.link", target="_blank")
            v-responsive.pt-4
              v-avatar(size="125")
                img(
                  v-if="organizer.photo",
                  :src="organizer.photo.photo_link"
                )
                div(v-else, style="font-size: 128px;") 🧙
            v-card-title.justify-center(primary-title)
              div
                h3.headline {{ organizer.name }}
                span.grey--text {{ getRole(organizer.group_profile.role) }}
            v-card-text {{ organizer.bio }}
</template>

<script>
import MeetupService from '@/services/MeetupService'

export default {
  data() {
    return {
      page: 20,
      organizers: []
    }
  },
  created() {
    MeetupService.getOrganizers(this.page).then(
      res => (this.organizers = res.data)
    )
  },
  methods: {
    getRole(role) {
      switch (role) {
        case 'organizer':
          return 'Organizador'
        case 'coorganizer':
          return 'Co-Organizador'
        case 'assistant_organizer':
          return 'Asistente Organizadorador'
        default:
          return role
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.organizers {
  .v-card {
    min-height: 336px;
  }
}
</style>
