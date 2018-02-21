<template>
    <section id="intro">
        <div class="mood mood--image">
            <figure>
                <img :src="`..${intro.body.image}`" alt="venohr consult">
                <figcaption>{{intro.body.herotitle}}</figcaption>
            </figure>
        </div>
        <vue-markdown :source="intro.body.herotext"></vue-markdown>
        <h2 class="title is-2 primary is-centered">{{intro.body.title}}</h2>
        <vue-markdown :source="intro.body.body"></vue-markdown>
        <pre>{{intro}}</pre>
    </section>
</template>

<script>
import GlobalHeader from '~/components/partials/GlobalHeader';

export default {
  components: {
    GlobalHeader
  },
    asyncData: async ({ app }) => ({
    intro: await app.$content('/pages').get('/intro'),

  }),
  methods: {
    getCorrectImagePath (url) {
      const path =  url.split('/')
      path.slice(1,3)
      let newPath = ''
      for (let i = 2; i < path.length; i++) {
        newPath += "/";
        newPath += path[i];
      }
      return newPath
    },
  }
}
</script>

<style lang="scss" scoped>
    .wrapper {
        min-height: 100vh;
        max-width: 704px;
        margin: 0 0 0 64px;
        background-color: $white;
    }
    .global-header{
        display: flex;
        flex-direction: column;
        justify-content: center;

    }
</style>
