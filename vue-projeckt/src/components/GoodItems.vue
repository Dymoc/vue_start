<template>
<h3 class = "myCart__text">Корзина пуста</h3>
<h3 class = "">{{ goodItems}}а</h3>
<!-- <ul id="myCart"> -->
     <!-- <li class="myCart__link">
          <div class="cart">
               <a href="single_page.html"><img src="${item.productImg}" alt=""
                         class="cart__img" height="90px" style="margin-right:10px"></a>
               <div class="cart__discription">
                    <a href="single_page.html">
                         <div class="cart__name">${item.productName}</div>
                    </a>
                    <img src="../src/assets/imgs/stars.png" alt="">
                    <div class="cart__coast siteColor"><span class="quantity">
                         ${item.productQuantity}</span><span class="cart__coast_x">x</span>
                         $${item.productPrice}</div>
               </div>
               <a class="delFromCart" ><i class="fas fa-backspace cart__action"
               id = "${item.productId}"></i></a>
          </div>
     </li> -->
     <!-- </ul> -->
</template>

<script>
export default {
  name: 'GoodsItems',
  props: ['GoodsItem'],
  computed: {
    goodItems() {
      return this.$store.state.goods.goodsItems;
    },
  },
};
</script>
