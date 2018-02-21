<template>
    <div class="section">
        <hero-image
                :image="`..${post.image}`"
                :caption="post.herotitle">
        </hero-image>
            <h4>{{post.name}}</h4>
        <div class="content">
            <vue-markdown :source="post.herotext"></vue-markdown>
            <h2 class="title is-2 primary is-centered">{{post.title}}</h2>
            <vue-markdown :source="post.body" class="body"></vue-markdown>
        </div>
    </div>
</template>

<script>
  import HeroImage from '~/components/commons/HeroImage';

  export default {
    name: 'post',
    components: {
      HeroImage
    },
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
    .section {
        margin-bottom: 32px;
        @include tablet {
            margin-bottom: 128px;
        }
    }
    .content {
        padding: 0 10px;
        @include tablet {
            padding: 0 64px;
        }
    }
    h2 {
        padding: 0 10px;

        @include tablet {
            padding: 0  32px 0 96px;
            font-size: 36px;
        }
    }
    h4{
        font-family: $sans-font;
        font-weight: 700;
        font-style: normal;
        text-transform: uppercase;
        font-size: 16px;
        padding-left: 10px;

    }
</style>
