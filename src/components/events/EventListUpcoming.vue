<template lang="pug">
  a.white--text(:href="event.link" target="_blank",)
    v-layout(row, wrap, align-center, class="pa-3 text-xs-left")
      v-flex(xs12)
        .headline.text-xs-center.font-weight-bold.pb-3 {{ event.name }}
        div(
          :class="{'mx-5 px-5': $vuetify.breakpoint.mdAndUp}"
          v-html="event.description"
        )
      v-flex(xs12, sm10, offset-sm1)
        v-chip(label, small, color="primary", text-color="white")
          v-avatar
            v-icon(size="14px") fas fa-map-marker-alt
          | {{ event.venue.name }}
        v-chip(label, small, color="primary", text-color="white")
          v-avatar
            v-icon(size="14px") fas fa-calendar-day
          | {{ event.local_date }} / {{ event.local_time }}
        v-chip(label, small, color="success", text-color="white")
          v-avatar
            v-icon(size="14px") fas fa-walking
          | {{ event.yes_rsvp_count }}
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
