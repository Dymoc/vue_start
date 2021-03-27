<template>
<div>
     <li class="myCart__link">
          <div class="cart">
               <router-link :to="{ name: 'SinglePage', params: { id: item.productId }}">
                <img :src = "item.productImg" alt=""
                class="cart__img" height="90px" style="margin-right:10px">
               </router-link>
               <div class="cart__discription">
                    <router-link :to="{ name: 'SinglePage', params: { id: item.productId }}">
                         <div class="cart__name">{{ item.productName }}</div>
                    </router-link>
                    <img src="../assets/imgs/stars.png" alt="">
                    <div class="cart__coast siteColor"><span class="quantity">
                         {{ item.productQuantity }}</span><span class="cart__coast_x">x</span>
                         ${{ item.productPrice }}</div>
               </div>
               <a class="delFromCart" @click="del(item)"><i class="fas fa-backspace cart__action"
               :id = "item.productId"></i></a>
          </div>
     </li>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'GoodsItem',
  props: ['item'],
  methods: {
    ...mapActions(['delGood']),
    del(item) {
      this.delGood(item);
    },
  },
};
</script>

<style>
.cart__img {
     height: 90px;
}

.cart {
  width: 230px;
  height: 85px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-radius: 5px;
  -webkit-animation: slide-in-elliptic-right-fwd 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation: slide-in-elliptic-right-fwd 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-elliptic-right-fwd {
  0% {
    -webkit-transform: translateX(800px) rotateY(-30deg) scale(0);
    transform: translateX(800px) rotateY(-30deg) scale(0);
    -webkit-transform-origin: -100% 50%;
    transform-origin: -100% 50%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotateY(0) scale(1);
    transform: translateX(0) rotateY(0) scale(1);
    -webkit-transform-origin: -1800px 50%;
    transform-origin: -1800px 50%;
    opacity: 1;
  }
}

@keyframes slide-in-elliptic-right-fwd {
  0% {
    -webkit-transform: translateX(800px) rotateY(-30deg) scale(0);
    transform: translateX(800px) rotateY(-30deg) scale(0);
    -webkit-transform-origin: -100% 50%;
    transform-origin: -100% 50%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotateY(0) scale(1);
    transform: translateX(0) rotateY(0) scale(1);
    -webkit-transform-origin: -1800px 50%;
    transform-origin: -1800px 50%;
    opacity: 1;
  }
}

.cart__img {
  -webkit-transition: all 1s;
  transition: all 1s;
}

.cart__img:hover {
  -webkit-transform: scale(1.3);
          transform: scale(1.3);
}

.cart__name {
  font-size: 12px;
  font-weight: bold;
  color: #222222;
  text-transform: uppercase;
}

.cart__name:hover {
  color: #f16d7f;
}

.cart__coast {
  font-size: 12px;
  text-transform: uppercase;
}

.cart__coast_x {
  font-size: 10px;
}

.cart__action {
  font-size: 16px;
  color: silver;
  text-transform: uppercase;
  margin-top: 28px;
}

.cart__action:hover {
  color: #f16d7f;
}

</style>
