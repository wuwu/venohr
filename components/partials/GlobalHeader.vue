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
    .branding {
        padding-top: 32px;
    }
    .branding {
        display: flex;
        justify-content: center;
    }
    .main-menu {
        padding: 0 32px;
        display: flex;
        justify-content: space-between;
    }

</style>