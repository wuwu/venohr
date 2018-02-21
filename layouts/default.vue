<template>
    <div class="wrapper">
        <global-header class="global-header"/>
        <nuxt/>
        <global-footer class="global-header"/>
    </div>
</template>
<script>
  import GlobalHeader from '~/components/partials/GlobalHeader';
  import GlobalFooter from '~/components/partials/GlobalFooter';
  export default {
    components: {
      GlobalHeader,
      GlobalFooter
    },
    asyncData: async ({ app }) => ({
      intro: await app.$content('/pages').get('/intro'),

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
        max-width: 840px;
        margin: 0 auto;
        background: $white;
    }
</style>
