<template>
  <div class="page-index">
    <GlobalHeader/>
    <div class="wrapper">
      <PageBanner title="Free HR Advice"/>
      <div class="container">
        <p>{{ text }}</p>
      </div>
    </div>
    <FreeAnalysis/>
  </div>
</template>

<script>
import GlobalHeader from '~/components/partials/GlobalHeader';
import PageBanner from '~/components/partials/PageBanner';
import FreeAnalysis from '~/components/commons/FreeAnalysis';

export default {
  layout: 'default',
  components: {
    GlobalHeader,
    PageBanner,
    FreeAnalysis
  },
  asyncData: async ({ app }) => ({
    text: await app.$content('/pages').get('/test'),
  }),
};
</script>


