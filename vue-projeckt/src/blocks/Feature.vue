<template>
<div class="feature">
     <FeatureBaner/>
     <FeatureBoxDelivery/>
     <FeatureBoxSales/>
     <FeatureBoxQuality/>
</div>
</template>

<script>
import FeatureBaner from '@/components/FeatureBaner.vue';
import FeatureBoxDelivery from '@/components/FeatureBoxDelivery.vue';
import FeatureBoxSales from '@/components/FeatureBoxSales.vue';
import FeatureBoxQuality from '@/components/FeatureBoxQuality.vue';

export default {
  name: 'Feature',
  components: {
    FeatureBaner,
    FeatureBoxDelivery,
    FeatureBoxSales,
    FeatureBoxQuality,
  },
};
</script>

<style lang="css">
.feature {
  margin-top: 113px;
  background-color: #000;
  position: relative;
  width: 1140px;
}
</style>
