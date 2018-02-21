<template>
  <div id="prozess" class="page">
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

  </div>
</template>

<script>
export default {
  layout: 'default',
  components: {},
  asyncData: async ({ app }) => ({
    page: await app.$content('/pages').get('/process'),
  }),
};
</script>
