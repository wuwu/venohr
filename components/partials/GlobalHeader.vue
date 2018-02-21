<template>
  <header>
      <div class="branding">
        <logo></logo>
      </div>
        <div class="main-menu" v-show="openMenu">
            <a class="main-menu__link" v-for="link in menu" :href="link.href" v-bind:class="{ active: isActive(link) }" :key="link.title">{{link.title}}</a>
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
          openMenu: true,
          menu: [
            { href: '/prozess', title: 'Prozess' },
            { href: '/leistungen', title: 'Leistungen' },
            { href: '/erfahrung', title: 'Erfahrung'},
            { href: '/about', title: 'Yella Venohr' },
            { href: '/kontakt', title: 'Kontakt' },
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
    .branding {
        padding-top: 32px;
    }
    .branding {
        display: flex;
        justify-content: center;
        margin-bottom: 32px;
    }
    .main-menu {
        padding: 32px;
        display: flex;
        justify-content: space-between;
    }
    .main-menu__link{
        font-family: "Work Sans" sans-serif;
        font-style: normal;
        font-size: 16px;
        font-weight: bold;
        color: $black;
        text-transform: uppercase;
        text-decoration: none;
    }

</style>