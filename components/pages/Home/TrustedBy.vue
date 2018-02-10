<template>
  <section class="prev-clients">
    <h1 class="prev-clients__title">{{text.title}}</h1>
    <div class="container">
      <div class="grid">
        <div class="grid__cell 1/2--thumb 1/6--lap-and-up" v-for="(logo, key) in text.logos" :key="key">
          <img v-bind:src="logo.image"
            alt="1 Cover Logo"
            class="prev-clients__logo prev-clients__logo--cover"
            v-bind:class="`prev-clients__logo--${key}`">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="prev-clients__testimonial six columns">
        <a href="/testimonials" class="button" v-html="md(text.button)"></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    text: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
