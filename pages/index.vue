<template>
    <div id="index">
        <section-post id="intro" :post="postIntro.body"></section-post>
        <section-post id="prozess" :post="postProzess.body"></section-post>
        <section-post id="leistung" :post="postLeistung.body"></section-post>
        <section-post id="erfahrung" :post="postErfahrung.body"></section-post>
        <section-about id="about" :post="postAbout.body"></section-about>
        <section-kontakt id="kontakt" :post="postKontakt.body"></section-kontakt>
    </div>
</template>

<script>
import SectionPost from '~/components/posts/Post'
import SectionAbout from '~/components/posts/PostAbout'
import SectionKontakt from '~/components/posts/PostKontakt'

export default {
  name: 'front',
  components: {
    SectionPost,
    SectionAbout,
    SectionKontakt
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
