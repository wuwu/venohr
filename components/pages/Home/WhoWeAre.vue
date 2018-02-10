<template>
  <section class="we-are">
    <div class="we-are__copy container">
      <div class="grid">
        <div class="we-are__copy-section grid__cell 1/2--lap-and-up">
          <h5 class="we-are__subtitle" v-html="md(text.subtitle)"></h5>
          <h2 class="we-are__title" v-html="md(text.title)"></h2>
        </div>
        <div class="we-are__copy-section grid__cell 1/2--lap-and-up">
          <p class="we-are__body" v-html="md(text.body)"></p>
        </div>
      </div>
    </div>
    <div class="we-are__media container">
      <div class="we-are__services">
        <p class="we-are__body-cta" v-html="md(text.caption)"></p>
        <a href="/services" class="button button-primary" v-html="md(text.button)"></a>
      </div>
      <img src="~/assets/images/sydney-city-scape.jpg" alt="" class="we-are__img">
      <div class="we-are__services we-are__services--mob">
        <p class="we-are__body-cta" v-html="md(text.caption)"></p>
        <a href="/services" class="button button-primary" v-html="md(text.button)"></a>
      </div>
    </div>
    <div class="clearfix"></div>
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