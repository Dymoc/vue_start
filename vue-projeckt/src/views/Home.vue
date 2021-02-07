<template>
    <div>
        <Promo/>
        <Banner/>
        <!-- <Products/> -->
        <!-- <h1>{{  this.$store.state.count }}</h1> -->
        <!-- <Catalog></Catalog> -->
        <Feature/>
    </div>
</template>

<script>

import Promo from '@/blocks/Promo.vue';
import Banner from '@/blocks/Banner.vue';
import Feature from '@/blocks/Feature.vue';
// import Catalog from '@/blocks/Catalog.vue';

export default {
  name: 'Home',
  components: {
    Promo,
    Banner,
    Feature,
    // Catalog,
  },
};
</script>
