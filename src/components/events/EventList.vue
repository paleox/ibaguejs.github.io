<template lang="pug">
  section.section.has-text-centered
    .container
      h1.title Próximos Eventos
      #upcoming-events(v-if="upcomingEvents.length")
        event-list-upcoming(
          v-for="event in upcomingEvents",
          :key="event.created",
          :event="event"
        )
      .box(v-else)
        article.media
          .media-content
            .content.has-text-centered
              h3 No hay próximos eventos programados 💔
      br
      .box.has-background-js-primary
        article.media
          .media-content
            .content.is-info.has-text-centered
              h5
                | ¿Quieres proponer/exponer una charla? Abre un issue en nuestro
                | repositorio de <a href="https://github.com/IbagueJS/charlas"> Github </a> con tu
                | propuesta.
      h1.title Eventos Pasados
      #previous-events
        event-list-previous(
          v-for="event in previousEvents",
          :key="event.created",
          :event="event"
        )
</template>

<script>
import EventListUpcoming from '@/components/events/EventListUpcoming.vue'
import EventListPrevious from '@/components/events/EventListPrevious.vue'

import MeetupService from '@/services/MeetupService'

export default {
  components: {
    EventListUpcoming,
    EventListPrevious
  },
  data() {
    return {
      page: 5,
      upcomingEvents: [],
      previousEvents: []
    }
  },
  created() {
    MeetupService.getUpcomingEvents(this.page).then(
      res => (this.upcomingEvents = res.data)
    )
    MeetupService.getPreviousEvents(this.page).then(
      res => (this.previousEvents = res.data)
    )
  }
}
</script>
