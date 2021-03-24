<template>
<div class="header__right_img">
    <router-link :to="{name: 'ShopingCart'}">
      <img class="header__cart" src="../assets/imgs/cart.png" alt="cart">
    </router-link>
    <div class="header__cart_quantity"></div>
    <Goods/>
  </div>
</template>

<script>
import Goods from '@/blocks/Goods.vue';

export default {
  name: 'ShoppingCart',
  components: {
    Goods,
  },
  methods: {
    show() {
      console.log(this.$store.state.goods.goodsItems);
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
</style>
