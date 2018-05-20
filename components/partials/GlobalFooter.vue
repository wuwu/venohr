<template>
  <footer>
        <div class="main-menu">
            <a class="main-menu__link" href="#" v-scroll-to="'#prozess'">Prozess</a>
            <a class="main-menu__link" href="#" v-scroll-to="'#leistung'">Leistungen</a>
            <a class="main-menu__link" href="#" v-scroll-to="'#erfahrung'">Erfahrung</a>
            <a class="main-menu__link" href="#" v-scroll-to="'#about'">About</a>
            <a class="main-menu__link" href="#" v-scroll-to="'#kontakt'">Kontakt</a>
        </div>
      <div class="menu">
          <nuxt-link to="/impressum" class="main-menu__link" >Impressum</nuxt-link>
          <nuxt-link to="/datenschutzerklaerung" class="main-menu__link" >Datenschutz</nuxt-link>
      </div>
  </footer>
</template>

<script>

  export default {
      data() {
        return {
          openMenu: true,
          menu: [
            // { href: '/', title: 'Home' },
            { href: '/services', title: 'Services' },
            { href: '/process', title: 'Der Prozess'},
            // { href: '/jobs', title: 'Jobs' },
            { href: '/contact', title: 'Kontakt' },
          ],
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
    footer {
        background-image: url("~/assets/images/footer_background01.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        padding: 32px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        font-family: $sans-font;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        text-transform: uppercase;
    }
    .main-menu {
        padding: 0 32px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
    }
    .menu {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
    }
    .main-menu__link {
        color: $white;
        text-decoration: none;
    }

</style>