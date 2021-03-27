<template>
    <div>
        <Promo/>
        <Banner/>
            <section class="product center">
        <div class="product_top">
            <h1>Fetured Items</h1>
            <p>Shop for items based on what we featured in this week</p>

        </div>
        <div class="product_tovar_cart">
        <PromoProduct
         v-for="item in items"
         v-bind:item="item"
         v-bind:key="item.productId"
        ></PromoProduct>
        </div>
        <div class="prduct_bottom">
            <button class="button">Browse All Product
              <i class="fas fa-long-arrow-alt-right"></i></button>
        </div>
        </section>
        <Feature/>
    </div>
</template>

<script>

import Promo from '@/blocks/Promo.vue';
import Banner from '@/blocks/Banner.vue';
import Feature from '@/blocks/Feature.vue';
import PromoProduct from '@/blocks/PromoProduct.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Promo,
    Banner,
    Feature,
    PromoProduct,
  },
  computed: {
    ...mapGetters(['getTovars']),
    items() {
      return this.$store.state.items;
    },
  },
};
</script>

<style>
.product {
  margin-top: 100px;
}

.product_top h1 {
  font-size: 30px;
  font-weight: bold;
  color: #222222;
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 54px;
}

.product_top p {
  font-size: 14px;
  color: #9f9f9f;
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 54px;
}
.product_tovar_cart {
  margin-top: 60px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding-bottom: 30px;
  position: relative;
}
.prduct_bottom {
  width: 212px;
  text-align: center;
  margin: 0 auto;
}
</style>
