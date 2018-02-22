<template>
    <div id="datenschutz" class="page">
        <div class="content">
            <h2 class="title is-2 primary is-centered" v-html="page.body.title"></h2>
            <vue-markdown :source="page.body.body"></vue-markdown>
        </div>
    </div>
</template>

<script>

  export default {
    layout: 'info',
    name: 'datenschutz',
    asyncData: async ({ app }) => ({
      page: await app.$content('/pages').get('/datenschutz'),
    }),
  };
</script>
<style lang="scss" scoped>

</style>