<template>
  <section class="about-us">
    <div class="container about-us__spiel">
      <div class="grid">
        <div class="grid__cell 1/3--lap-and-up">
          <img class="about-us__portrait" v-bind:src="text.image" alt="" />
        </div>
        <div class="grid__cell 2/3--lap-and-up about-us__text">
          <h5 class="about-us__subtitle" v-html="text.subtitle"></h5>
          <h2 class="about-us__title" v-html="text.title"></h2>
          <p class="about-us__body" v-html="md(text.body)"></p>
          <!-- <div class="about-us__partner">
            <img class="about-us__partner-img about-us__partner-img--ahri" src="~/assets/images/ahri-logo.jpg" alt="">
            <img class="about-us__partner-img about-us__partner-img--coach" src="~/assets/images/hr-coach-logo.jpg" alt="">
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    text: Object,
    required: true,
  },
};
</script>

<style lang="scss" scoped>

</style>
