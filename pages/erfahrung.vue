<template>
    <div id="leistungen" class="page">
        <hero-image
                :image="`..${page.body.image}`"
                :caption="page.body.herotitle">
        </hero-image>
        <div class="content">
            <h2 class="title is-2 primary is-centered" v-html="page.body.title"></h2>
            <vue-markdown :source="page.body.body"></vue-markdown>
        </div>
    </div>
</template>

<script>
  import HeroImage from '~/components/commons/HeroImage';

  export default {
    layout: 'default',
    components: {
      HeroImage
    },
    asyncData: async ({ app }) => ({
      page: await app.$content('/pages').get('/erfahrung'),
    }),
  };

</script>

<style lang="scss" scoped>

</style>