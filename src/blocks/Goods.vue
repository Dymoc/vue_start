<template>
      <ul class="myCart__list">
        <ul id="myCart">
             <h2 class="totalCoast nullGoods" v-if = "goodsItems.length == 0">Корзина пуста</h2>
          <GoodsItem
           v-for="item in goodsItems"
           v-bind:item="item"
           v-bind:key="item.productId"
          ></GoodsItem>
        </ul>
        <div class="totalCoast">
          <div class="totalCoast__text">TOTAL</div>
          <div class="totalCoast__text" id="totalCoast">${{ totalCoast }}</div>
        </div>
        <router-link :to="{name: 'Checkout'}">
          <div  class="myCart__button">Checkout</div>
        </router-link>
        <router-link :to="{name: 'ShopingCart'}">
          <div  class="myCart__button">ShopingCart</div>
        </router-link>
      </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import GoodsItem from '@/components/GoodsItem.vue';

export default {
  name: 'Good',
  goodsItems: [],
  components: {
    GoodsItem,
  },
  actions: {
    ...mapGetters(['getGood']),
  },
  computed: {
    goodsItems() {
      return this.$store.state.goods.goodsItems;
    },
    totalCoast() {
      return this.$store.state.goods.totalCoast;
    },
  },
};

</script>

<style>
.myCart {
  display: block;
  outline: none;
}

.myCart::-webkit-details-marker {
  display: none;
}

.myCart::after {
  content: '\25B6';
  padding-right: 0.2em;
  margin-left: 7px;
}

.myCart__list {
  display: none;
  width: 262px;
  list-style-type: none;
  position: absolute;
  background-color: white;
  top: 35px;
  z-index: 100;
}

.myCart__list:last-child {
  border: none;
}

.myCart__link {
  padding-bottom: 20px;
  border-bottom: 1px solid #eaeaea;
  margin-top: 8px;
}
.totalCoast {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  color: #222222;
  text-transform: uppercase;
  margin: 19px -15px 32px -15px;
}

.nullGoods {
  justify-content: center;
}
.myCart__button {
  height: 50px;
  width: 225px;
  font-size: 14px;
  font-weight: bold;
  color: #4a4a4a;
  text-transform: uppercase;
  border: 1px solid #eaeaea;
  text-align: center;
  padding-top: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
}

.myCart__button:hover {
  border: 1px solid #f16d7f;
  color: #f16d7f;
}

</style>
