<template>
<div class="header__right_img">
    <a @click="show">
      <img class="header__cart" src="../assets/imgs/cart.png" alt="cart">
    </a>
    <div class="header__cart_quantity"></div>
      <ul class="myCart__list">
        <ul id="myCart">
          <GoodsItems
           v-for="GoodsItem in GoodsItems"
           v-bind:item="GoodsItem"
           v-bind:key="GoodsItem.productId"
          ></GoodsItems>
        </ul>
        <div class="totalCoast">
          <div class="totalCoast__text">TOTAL</div>
          <div class="totalCoast__text" id="totalCoast">$0.00</div>
        </div>
        <div class=" myCart__button" onclick="location ='checkout.html'">Checkout</div>
        <div class=" myCart__button" onclick="location ='ShoppingCart.html'">Go to cart</div>
      </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GoodsItems from '@/components/GoodItems.vue';

export default {
  name: 'ShoppingCart',
  urlBD: 'https://raw.githubusercontent.com/Dymoc/static/master/JSON/catalog.json',
  goodsItem: [],
  components: {
    GoodsItems,
  },
  methods: {
    show() {
      console.log(this.$store.state.goods.goodsItems);
    },
  },
  actions: {
    ...mapGetters(['getGood']),
  },
  computed: {
    goodsItem() {
      return this.$store.state.goodsItem;
    },
  },
};

</script>

<style lang="css">
.header__right_img{
  position: relative;
}

.header__right_img:hover .myCart__list {
  display: block;
}

.header__cart {
  margin-right: 26px;
  color: white;
  text-align: center;
  margin-top: 5px;
  -webkit-transition: ease-in-out 0.3s;
  transition: ease-in-out 0.3s;
  -webkit-transition: all 1s;
  transition: all 1s;
}

.header__cart:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.header__cart_quantity{
  display: none;
  position: absolute;
  background-color: #f16d7f;
  text-align: center;
  color: white;
  font-size: 16px;
  width: 23px;
  height: 23px;
  border-radius: 15px;
  top: -9px;
  left: 23px;
}

.header__right_img{
  position: relative;
}

.header__right_img:hover .myCart__list {
  display: block;
}

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
