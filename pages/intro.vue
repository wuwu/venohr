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
    </section>
</template>

<script>

  export default {
    asyncData: async ({ app }) => ({
      intro: await app.$content('/pages').get('/intro'),
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
