<template>
<div class="tovar_cart">
    <div class="add_to_cart">
        <a href="single_page.html"><img src="../src/assets/imgs/tovar_hover.png" alt=""></a>
        <a style="cursor:pointer" class="button_add_to_cart" id = '${item.productId}'>Add to Cart</a>
        <a style="cursor:pointer" class="button_arrows"></a>
        <a style="cursor:pointer" class="button_like"></a>
    </div>
    <img src="${item.productImg}" alt="">
    <div class="tovar_info">${item.productName}</div>
    <div class="tovar_price siteColor">$${item.productPrice}</div>
    <div class="stars"><img src="../src/assets/imgs/stars.png" alt=""></div>
</div>
</template>

<script>
export default {
  name: 'CatalogItem',
};
</script>

<style lang="css">
.tovar_cart {
  margin-bottom: 30px;
  position: relative;
  -webkit-transition: ease-in 0.8s;
  transition: ease-in 0.8s;
}
.tovar_cart:hover {
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.17);
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.17);
  -webkit-transform: scale(1.03);
          transform: scale(1.03);
}
.tovar_cart:hover .add_to_cart {
  display: block;
}
.tovar_cart:hover .stars {
  display: block;
}
.add_to_cart {
  display: none;
  position: absolute;
  opacity: 0.7;
}
.add_to_cart a {
  color: #fff;
}
.button_add_to_cart {
  min-width: 123px;
  min-height: 39px;
  border: 1px solid #fff;
  border-radius: 5px;
  position: absolute;
  top: 97px;
  left: 70px;
  font-size: 13px;
  font-weight: bold;
  color: white;
  padding-left: 43px;
  padding-top: 10px;
  background-image: url(../../assets/imgs/cart-white.png);
  background-repeat: no-repeat;
  background-position: 10px;
}
.button_arrows {
  min-width: 57px;
  min-height: 38px;
  border: 1px solid #fff;
  border-radius: 5px;
  position: absolute;
  top: 140px;
  left: 70px;
  font-size: 13px;
  font-weight: bold;
  color: white;
  padding-left: 43px;
  padding-top: 10px;
  background-image: url(../../assets/imgs/arrows.png);
  background-repeat: no-repeat;
  background-position: center;
}
.button_like {
  min-width: 57px;
  min-height: 38px;
  border: 1px solid #fff;
  border-radius: 5px;
  position: absolute;
  top: 140px;
  left: 135px;
  font-size: 13px;
  font-weight: bold;
  color: white;
  padding-left: 43px;
  padding-top: 10px;
  background-image: url(../../assets/imgs/heard.png);
  background-repeat: no-repeat;
  background-position: center;
}
.tovar_info {
  font-size: 13px;
  color: #222222;
  text-align: left;
  text-transform: uppercase;
  margin-left: 13px;
  margin-top: 19px;
}
.tovar_price {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  text-transform: uppercase;
  margin-left: 13px;
  margin-top: 17px;
  margin-bottom: 29px;
}
.stars {
  position: absolute;
  top: 335px;
  left: 170px;
  display: none;
}
</style>