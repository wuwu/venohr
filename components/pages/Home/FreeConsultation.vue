<template>
  <section class="free-consult">
    <div class="container">
      <div class="grid">
        <div class="free-consult__services grid__cell 1/2--lap-and-up">
          <h1 class="free-consult__title" v-html="md(text.title)"></h1>
          <form class="free-consult__form">
            <fieldset>
              <input type="text" class="free-consult__input" id="name" :placeholder="text.form.name">
              <input type="text" class="free-consult__input" id="phone" :placeholder="text.form.email"><br>
              <input class="button button-primary" type="submit" :value="text.form.button">
            </fieldset>
          </form>
        </div>
        <div class="free-consult__features grid__cell 1/2--lap-and-up">
          <h2 class="free-consult__subtitle" v-html="md(text.intro)"></h2>
          <p class="free-consult__body">
            <img src="~/assets/images/icon-check-white.svg" alt="" class="free-consult__icon"> <span>{{text.features.one}}</span><br>
            <img src="~/assets/images/icon-check-white.svg" alt="" class="free-consult__icon"> <span>{{text.features.two}}</span><br>
            <img src="~/assets/images/icon-check-white.svg" alt="" class="free-consult__icon"> <span>{{text.features.three}}</span>
          </p>
        </div>
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
