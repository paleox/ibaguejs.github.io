<template lang="pug">
  a.white--text(:href="event.link", target="_blank")
    v-layout(row, wrap, align-center, class="pa-3 text-xs-left")
      v-flex(xs12, sm10, offset-sm1)
        h4.title.ml-1.mb-2 {{ event.name }}
        v-chip(label, small, color="primary", text-color="white")
          v-avatar
            v-icon(size="14px") fas fa-calendar-day
          | {{ event.local_date }}
    v-divider
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
