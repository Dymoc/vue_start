<template>
<div class="header__right_img">
    <a href="ShoppingCart.html">
      <img class="header__cart" src="../assets/imgs/cart.png" alt="cart" />
    </a>
    </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
};
</script>

<style lang="css">
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

</style>
