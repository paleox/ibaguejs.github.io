<template lang="pug">
  .landing
    event-list
    the-about
    landing-organizers
    landing-sponsors
</template>

<script>
import EventList from '@/components/events/EventList.vue'
import TheAbout from '@/components/layout/TheAbout.vue'
import LandingOrganizers from '@/components/landing/LandingOrganizers.vue'
import LandingSponsors from '@/components/landing/LandingSponsors.vue'

export default {
  name: 'landing',
  components: {
    EventList,
    TheAbout,
    LandingOrganizers,
    LandingSponsors
  }
}
</script>
