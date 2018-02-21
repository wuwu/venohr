<template>
    <div id="index">
        <section-post id="intro" :post="postIntro.body"></section-post>
        <section-post id="prozess" :post="postProzess.body"></section-post>
        <section-post id="leistung" :post="postLeistung.body"></section-post>
        <section-post id="erfahrung" :post="postErfahrung.body"></section-post>
        <section-post id="about" :post="postAbout.body"></section-post>
        <section-post id="kontakt" :post="postKontakt.body"></section-post>
    </div>
</template>

<script>
import SectionPost from '~/components/commons/Post'
export default {
  name: 'front',
  components: {
    SectionPost
  },
  asyncData: async ({ app }) => ({
      postIntro: await app.$content('/pages').get('/intro'),
      postProzess: await app.$content('/pages').get('/process'),
      postLeistung: await app.$content('/pages').get('/services'),
      postErfahrung: await app.$content('/pages').get('/erfahrung'),
      postAbout: await app.$content('/pages').get('/about'),
      postKontakt: await app.$content('/pages').get('/contact'),
  })
}
</script>

<style lang="scss" scoped>

</style>
