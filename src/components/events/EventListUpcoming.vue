<template lang="pug">
  .box
    a(:href="event.link" target="_blank")
      article.media
        .media-content
          .content
            h2 {{ event.name }}
            .has-text-light.has-padding(v-html="event.description")
          nav.level.is-mobile
            .level-left
              .tags
                span.tag.is-success Asistentes: {{ event.yes_rsvp_count }}
                span.tag.is-info Lugar: {{ event.venue.name }}
                span.tag.is-info Fecha/Hora: {{ event.local_date }} / {{ event.local_time }}
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>
