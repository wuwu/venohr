<template>
    <div class="wrapper">
        <logo class="logo"></logo>
        <nuxt-link to="/" class="button">zurück</nuxt-link>
        <nuxt/>
        <nuxt-link to="/" class="button">zurück</nuxt-link>
    </div>
</template>
<script>
  import Logo from '~/components/commons/Logo.vue'

  export default {
    components: {
      Logo
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
        max-width: 920px;
        margin: 0 auto;
        background: $white;
        display: flex;
        flex-direction: column;
    }
    .logo {
        padding: 32px 0 0 0;
        align-self: center;
    }
    .button{
        align-self: center;
        margin: 32px 0;
        background: $primary;
        color: $white;
        font-size: 20px;
        font-family: $sans-font;
        border-radius: 5px;
        padding: 8px 16px;
        text-decoration: none;


        &:hover {
            background: $secondary;
        }
    }
</style>
