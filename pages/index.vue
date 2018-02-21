<template>
    <div class="wrapper">
        <GlobalHeader class="global-header"/>

        <section id="intro">
            <div class="mood mood--image">
                <figure>
                    <img :src="`..${intro.body.image}`" alt="venohr consult">
                    <figcaption>something ultra smart...</figcaption>
                </figure>
            </div>
            <h2 class="title is-2 primary is-centered">{{intro.body.title}}</h2>
            <pre>{{intro}}</pre>
        </section>
    </div>

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
