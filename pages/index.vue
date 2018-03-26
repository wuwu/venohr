<template>
    <div id="index">
        <section-post id="intro" :post="postIntro.body" gradient="gradient1"></section-post>
        <section-post id="prozess" :post="postProzess.body" gradient="gradient2"></section-post>
        <section-post id="leistung" :post="postLeistung.body" gradient="gradient3"></section-post>
        <section-post id="erfahrung" :post="postErfahrung.body" gradient="gradient1"></section-post>
        <section-about id="about" :post="postAbout.body" gradient="gradient2"></section-about>
        <section-kontakt id="kontakt" :post="postKontakt.body" gradient="gradient3"></section-kontakt>
        <button-scroll-top></button-scroll-top>
    </div>
</template>

<script>
import SectionPost from '~/components/posts/Post'
import SectionAbout from '~/components/posts/PostAbout'
import SectionKontakt from '~/components/posts/PostKontakt'
import ButtonScrollTop from '~/components/partials/ButtonScrollTop.vue'

export default {
  name: 'front',
  head () {
    return {
      title: 'Yella Venohr Consult - Executive Search'
    }
  },
  components: {
    SectionPost,
    SectionAbout,
    SectionKontakt,
    ButtonScrollTop
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
