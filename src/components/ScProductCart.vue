<template>
     <div class="sc_product_cart">
          <router-link :to="{ name: 'SinglePage', params: { id: item.productId }}"
          class="sc_product_cart_a">
               <img :src="item.productImg" alt="" class="sc_product_cart_a_img">
          </router-link>
          <div class="sc_product_cart_info">
               <router-link :to="{ name: 'SinglePage', params: { id: item.productId }}"
                class="sc_product_cart_info_h1">{{ item.productName }}
               </router-link>
               <div class="sc_product_cart_info_color"><span>Color:</span> Red</div>
               <div class="sc_product_cart_info_size"><span>Size:</span> Xll</div>
          </div>
          <div class="sc_product_cart_price">${{ item.productPrice}}</div>
          <input class="sc_product_cart_quantity"
          type="number" min="0" max="99" :placeholder= "item.productQuantity"
          v-model="quantity">
          <h1>{{ quantity }}</h1>
          <div class="sc_product_cart_shipping">FREE</div>
          <div class="sc_product_cart_subtotal">${{ item.productQuantity * item.productPrice}}</div>
          <div class="sc_product_cart_action"><a  @click="del(item)">
               <i class="fas fa-backspace"></i></a></div>
     </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ScProductCart',
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    ...mapActions(['delGood']),
    del(item) {
      this.delGood(item);
    },
  },
  beforeMaunted() {
    this.quantity = this.item.productQuantity;
  },
  props: ['item'],
  watch: {
    quantity: {
      deep: true,
      handler() {
        console.log('123');
      },
    },
  },
};
</script>

<style lang="css">
.sc_product_cart {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-top: 1px solid #eaeaea;
  padding-top: 20px;
  padding-bottom: 20px;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: 13px;
  font-weight: 500;
  color: #6f6e6e;
  line-height: 20px;
}

.sc_product_cart_a {
  margin-left: 0px;
}

.sc_product_cart_a img {
  height: 100px;
}

.sc_product_cart_a img:hover {
  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
          animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.sc_product_cart_info {
  margin-left: -30px;
  width: 275px;
}

.sc_product_cart_info_h1 {
  color: #222222;
  text-transform: uppercase;
}

.sc_product_cart_info_color {
  color: #575757;
  line-height: 20px;
  margin-top: 25px;
  margin-bottom: 5px;
}

.sc_product_cart_info_color span {
  color: #575757;
  line-height: 20px;
}

.sc_product_cart_info_size {
  color: #575757;
  line-height: 20px;
}

.sc_product_cart_quantity {
  width: 54px;
  height: 30px;
  padding: 5px 24px 5px 24px;
  border: 1px solid #eaeaea;
  text-align: center;
  padding: 5px;
  font-size: 13px;
  color: #656565;
  line-height: 20px;
}

.sc_product_cart_action {
  text-align: right;
  margin-right: 20px;
}

.sc_product_cart_action a {
  font-size: 16px;
  color: silver;
  text-align: right;
  text-transform: uppercase;
}

.sc_product_cart_action a:hover {
  color: #f16d7f;
}

</style>
