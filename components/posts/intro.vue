<template>

    <pre>{{page}}</pre>
</template>

<script>
  import HeroImage from '~/components/commons/HeroImage';

  export default {
    components: {
      HeroImage
    },
    asyncData: async ({ app }) => ({
      page: await app.$content('/pages').get('/intro'),
    })
  }
</script>

<style lang="scss" scoped>

</style>
