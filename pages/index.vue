<template>
    <div class="wrapper">
        <GlobalHeader/>

        <section id="navigation" class="container">
            <logo/> 
            <p>{{text.body.hero}}</p>
        </section>
    </div>

</template>

<script>
import Logo from '~/components/Logo.vue'
import GlobalHeader from '~/components/partials/GlobalHeader';

export default {
  components: {
    Logo,
    GlobalHeader
  },
    asyncData: async ({ app }) => ({
    text: await app.$content('/pages').get('/home'),
  }),
}
</script>

<style lang="scss" scoped>
.container
{
  min-height: 100vh;
  display: flex;
    flex-flow: column;
  justify-content: center;
  align-items: center;
    margin-bottom: 144px;
}
.title
{
  display: block;
  font-weight: 300;
  font-size: 48px;
  color: $primary;
  letter-spacing: 1px;
}
.has-bg {
    background-color: $color-background;
}
.is-primary {
    color: $primary;
}
.motto {
    padding: 0;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 0;
    margin-right: 0;
    padding-top: 16px;
    padding-bottom: 16px;
}
</style>
