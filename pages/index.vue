<template>
    <div class="wrapper">
        <GlobalHeader class="global-header"/>

        <section id="about">
            <div class="mood mood--image">
                <figure>
                    <img :src="getCorrectImagePath(about.body.image)" alt="venohr consult">
                    <figcaption>something ultra smart...</figcaption>
                </figure>
            </div>
            <h2 class="title is-2 primary is-centered">{{about.body.title}}</h2>
            <pre>{{about}}</pre>
        </section>
        <section id="services">
            <h2 class="title is-2 primary is-centered">{{ services.body.title }}</h2>
            <figure>
                <img :src="getCorrectImagePath(services.body.image)" alt="venohr consult">
                <figcaption>some Quote...</figcaption>
            </figure>
            <pre>{{services}}</pre>
        </section>
        <section id="process">
            <h2 class="title is-2 primary is-centered">{{ process.body.title }}</h2>
            <figure>
                <img :src="getCorrectImagePath(process.body.image)" alt="venohr consult">
                <figcaption>some Quote...</figcaption>
            </figure>
            <pre>{{process}}</pre>
        </section>
        <section id="contact">
            <h2 class="title is-2 primary is-centered">{{ contact.body.title }}</h2>
            <pre>{{contact}}</pre>
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
    about: await app.$content('/pages').get('/about'),
    services: await app.$content('/pages').get('/services'),
    process: await app.$content('/pages').get('/process'),
    contact: await app.$content('/pages').get('/contact')
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
