<template lang="pug">
  .landing
    app-events
    app-about
    app-organizers
    app-sponsors
</template>

<script>
import AppEvents from '@/components/events/AppEvents.vue'
import AppOrganizers from '@/components/landing/AppOrganizers.vue'
import AppAbout from '@/components/landing/AppAbout.vue'
import AppSponsors from '@/components/landing/AppSponsors.vue'

export default {
  components: {
    AppEvents,
    AppAbout,
    AppOrganizers,
    AppSponsors
  }
}
</script>
