<template lang="pug">
  .box
    a(:href="event.link", target="_blank")
      article.media
        .media-content
          .content
            h4
              span.tag.is-info {{ event.local_date }}
              | &nbsp;{{ event.name }}
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
