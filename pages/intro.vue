<template>
  <div class="page-index">
    <GlobalHeader/>
    <div class="wrapper">
      <OurMission :text="text.body" />
      <FreeAnalysis />
    </div>
  </div>
</template>

<script>
import GlobalHeader from '~/components/partials/GlobalHeader';
import OurMission from '~/components/pages/About/OurMission';
import FreeAnalysis from '~/components/commons/FreeAnalysis';

export default {
  layout: 'page',
  components: {
    GlobalHeader,
    OurMission,
    FreeAnalysis,
  },
  asyncData: async ({ app }) => ({
    text: await app.$content('/pages').get('/intro'),
  }),
};
</script>
