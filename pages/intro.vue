<template>
    <section id="intro">
        <hero-image
                :image="`..${page.body.image}`"
                :caption="page.body.herotitle">
        </hero-image>
        <vue-markdown :source="page.body.herotext"></vue-markdown>
        <h2 class="title is-2 primary is-centered">{{page.body.title}}</h2>
        <vue-markdown :source="page.body.body"></vue-markdown>
    </section>
</template>

<script>
  import HeroImage from '~/components/commons/HeroImage';

  export default {
    layout: 'default',
    components: {
      HeroImage
    },
    asyncData: async ({ app }) => ({
      page: await app.$content('/pages').get('/intro'),
    })
  }
</script>

<style lang="scss" scoped>
    .mood--image {
    figure {
        line-height: 0;
        margin: 0;
        padding: 0;
        border: solid 10px $primary;
    }
    figcaption {
        color: $primary;
        font-size: 36px;
        line-height: 38px;
    }
    img {
        width: 100%;
        height: auto;
    }
    }
</style>
