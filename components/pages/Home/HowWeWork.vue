<template>
  <section class="we-work">
    <div class="container">
      <div class="grid">
        <div class="grid__cell 1/2--lap-and-up">
          <h5 class="we-are__subtitle" v-html="md(text.subtitle)"></h5>
          <h2 class="we-are__title" v-html="md(text.title)"></h2>
          <p class="we-are__body" v-html="md(text.body)"></p>
          <a href="/contact" class="button button-primary" v-html="md(text.button)"></a>
        </div>
        <div class="grid__cell 1/2--lap-and-up we-work__service-list">
          <div class="we-work__service" v-for="(feature, index) in text.features" :key="index">
            <img src="~/assets/images/icon-check.svg" alt="" class="we-work__img grid__cell 1/4">
            <h3 class="we-work__service-title grid__cell 3/4">{{feature.name}}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="we-work__media container container--mob">
      <img src="~/assets/images/small-business.jpg" alt="" class="we-work__img-cta">
      <div class="we-work__services">
        <h2 class="we-work__title-cta">Evidence-based methodology</h2>
        <p class="we-work__body-cta">Through the HR Coach Research Institute, we have a range of HR Consulting services backed by solid and ongoing research, designed to deliver quality, measurable results for business.</p>
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