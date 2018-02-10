<template>
    <div class="wrapper">
        <GlobalHeader class="global-header"/>

        <section id="about">
            <div class="mood mood--image">
                <figure>
                    <img :src="about.body.image" alt="venohr consult">
                    <figcaption>something ultra smart...</figcaption>
                </figure>
            </div>
            <h2 class="title is-2 primary is-centered">{{about.body.title}}</h2>
            <pre>{{about}}</pre>
        </section>
        <section id="services">
            <h2 class="title is-2 primary is-centered">{{ services.body.title }}</h2>
            <figure>
                <img :src="services.body.image" alt="SIMONE HOFER - WELLNESSMASSAGEN">
                <figcaption>some Quote...</figcaption>
            </figure>
            <pre>{{services}}</pre>
        </section>
        <section id="process">
            <h2 class="title is-2 primary is-centered">{{ process.body.title }}</h2>
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
  })
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
