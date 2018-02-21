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
        <h2 class="title is-2 primary is-centered" v-html="page.body.title"></h2>

        <vue-markdown :source="page.body.body"></vue-markdown>
        <pre>{{page}}</pre>
    </div>
</template>

<script>

export default {
  layout: 'page',
  components: {  },
  asyncData: async ({ app }) => ({
    page: await app.$content('/pages').get('/services'),
  }),
};
</script>
<style lang="scss" scoped>
    .mood--image {

    }
</style>