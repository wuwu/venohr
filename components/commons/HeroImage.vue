<template>
    <div class="mood mood--image" :class="gradient">
        <figure>
            <img :src="image" alt="venohr consult">
            <figcaption><vue-markdown :source="caption"></vue-markdown></figcaption>
        </figure>
    </div>
</template>

<script>
  export default {
    name: 'heroimage',
    props: {
      image: {
        type: String,
        required: true
      },
      caption: {
        type: String
      },
      gradient: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
    .mood--image {
        padding: 10px;
        background: $primary;
        background: linear-gradient(135deg, $primary 0%, rgba(99,80,153,1) 29%, $secondary 92%);
        figure {
            position: relative;
            line-height: 0;
            margin: 0;
            padding: 0;
        }
        figcaption {
            color: rgba($white, 0.9);
            text-align: center;
            line-height: 34px;
            font-size: 20px;

            @include tablet {
                font-size: 28px;
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                color: rgba($primary, .75);
            }
        }
        img {
            width: 100%;
            height: auto;
        }
    }
    .gradient1 {
        background: linear-gradient(45deg, $primary 0%, $secondary 92%);
    }
    .gradient2 {
        background: linear-gradient(60deg, $secondary 0%, $primary 100%);
    }
    .gradient3 {
        background: linear-gradient(35deg, $primary 0%,  $secondary 40%, rgba(99,80,153,1) 90%);
    }
</style>
