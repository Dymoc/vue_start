<template>
    <div>
        <Breadcrumb/>
        <CatalogManContent/>
        <FeatureBoxBanner/>
    </div>

</template>

<script>

import CatalogManContent from '@/blocks/CatalogManContent.vue';
import FeatureBoxBanner from '@/blocks/FeatureBoxBanner.vue';
import Breadcrumb from '@/blocks/Breadcrumb.vue';

export default {
  name: 'CatalogMan',
  components: {
    Breadcrumb,
    CatalogManContent,
    FeatureBoxBanner,
  },
};
</script>
