<template lang="pug">
  section.section.has-text-centered
    .container
      h1.title Equipo Organizador
      #organizers.columns.is-desktop
        .column.is-one-quarter-desktop(
          v-for="organizer in organizers",
          :key="organizer.id"
        )
          a(:href="organizer.group_profile.link", target="_blank")
            .card
              nav.level(style="padding-top: 10px;")
                .card-image.level-item.has-text-centered
                  figure.image.is-128x128
                    img(
                      v-if="organizer.photo",
                      class="image-128x128",
                      :src="organizer.photo.photo_link",
                      alt="Foto Organizador"
                    )
                    div(v-else, style="font-size: 128px;") 🧙
              .card-content
                .media
                  .media-content
                    p.title.is-4 {{ organizer.name }}
                    p.subtitle.is-6 {{ getRole(organizer.group_profile.role) }}
                .content {{ organizer.bio }}
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
        case 'assistant_organizer':
          return 'Asistente Organizadorador'
        default:
          return role
      }
    }
  }
}
</script>

<style lang="scss">
#organizers {
  .card {
    height: 357px;
  }
}
</style>
