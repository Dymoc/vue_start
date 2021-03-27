<template>
<div class="feature_box_banner center">
        <FeatureBoxBannerDelivery/>
        <FeatureBoxBannerSales/>
        <FeatureBoxBannerQuality/>

    </div>
</template>

<script>
import FeatureBoxBannerDelivery from '@/components/FeatureBoxBannerDelivery.vue';
import FeatureBoxBannerSales from '@/components/FeatureBoxBannerSales.vue';
import FeatureBoxBannerQuality from '@/components/FeatureBoxBannerQuality.vue';

export default {
  name: 'FeatureBoxBanner',
  components: {
    FeatureBoxBannerDelivery,
    FeatureBoxBannerSales,
    FeatureBoxBannerQuality,
  },
};
</script>

<style lang="css">
.feature_box_banner {
  height: 341px;
  background-color: #000;
  margin-bottom: -97px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
}

</style>
