<template>
    <div id="impressum" class="page">
        <div class="content">
            <h2 class="title is-2 primary is-centered" v-html="page.body.title"></h2>
            <vue-markdown :source="page.body.body"></vue-markdown>
        </div>
    </div>
</template>

<script>

  export default {
    layout: 'info',
    name: 'impressum',
    asyncData: async ({ app }) => ({
      page: await app.$content('/pages').get('/impressum'),
    }),
  }

</script>
<style lang="scss" scoped>

</style>