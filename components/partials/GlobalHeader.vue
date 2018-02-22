<template>
  <header>
      <div class="branding">
        <logo></logo>
      </div>
        <div class="main-menu" v-show="openMenu">
            <a class="main-menu__link" href="#" v-scroll-to="'#prozess'">Prozess</a>
            <a class="main-menu__link" href="#" v-scroll-to="'#leistung'">Leistungen</a>
            <a class="main-menu__link" href="#" v-scroll-to="'#erfahrung'">Erfahrung</a>
            <a class="main-menu__link" href="#" v-scroll-to="'#about'">About</a>
            <a class="main-menu__link" href="#" v-scroll-to="'#kontakt'">Kontakt</a>
        </div>
  </header>
</template>

<script>
  import Logo from '~/components/commons/Logo.vue'

  export default {
    components: {
      Logo
    },
      data() {
        return {
          openMenu: true
        };
      },
      methods: {
        isActive(link) {
          return this.$route.fullPath === link.href;
        },
      },
    };
</script>

<style lang="scss" scoped>
    .branding {
        display: flex;
        justify-content: center;
        margin-bottom: 32px;
    }
    .main-menu {
        padding: 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        a {
            text-align: center;
        }
        @include tablet {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            a {
                text-align: left;
            }
        }
        @include desktop {
            padding-left: 128px;
            padding-right: 128px;
        }
    }
    .main-menu__link{
        font-family: $sans-font;
        font-style: normal;
        font-size: 16px;
        font-weight: bold;
        color: $black;
        text-transform: uppercase;
        text-decoration: none;
    }

</style>