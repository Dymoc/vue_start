<template>
    <div>
        <Promo/>
        <Banner/>
        <Products/>
        <Feature/>
    </div>
</template>

<script>

import Promo from '@/blocks/Promo.vue';
import Banner from '@/blocks/Banner.vue';
import Feature from '@/blocks/Feature.vue';

export default {
  name: 'Home',
  components: {
    Promo,
    Banner,
    Feature,
  },
};
</script>
