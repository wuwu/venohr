<template>
    <div id="leistungen" class="page">
        <div class="mood mood--image">
            <figure>
                <img :src="`..${page.body.image}`" alt="venohr consult">
                <figcaption>
                    <vue-markdown :source="page.body.herotitle"></vue-markdown>
                </figcaption>
            </figure>
        </div>
        <div class="content">
            <h2 class="title is-2 primary is-centered" v-html="page.body.title"></h2>
            <vue-markdown :source="page.body.body"></vue-markdown>
        </div>
    </div>
</template>

<script>

  export default {
    layout: 'page',
    components: {  },
    asyncData: async ({ app }) => ({
      page: await app.$content('/pages').get('/contact'),
    }),
  };
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
    .content {
        padding: 32px;
    }
</style>