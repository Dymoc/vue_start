<template>
<div class="sc_product">
            <ScProductCart/>
            <ScProductCart/>
            <ScProductCart/>
            <div class="sc_button">
                <button class="sc_button_clear">cLEAR SHOPPING CART</button>
                <button class="sc_button_continue">cONTINUE sHOPPING</button>
            </div>
        </div>
</template>

<script>
import ScProductCart from '@/components/ScProductCart.vue';

export default {
  name: 'ScProduct',
  components: {
    ScProductCart,
  },
};
</script>

<style lang="css">

.sc_button {
  border-top: 1px solid #eaeaea;
  padding-top: 44px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.sc_button button:hover {
  border: 1px solid #f16d7f;
  color: #f16d7f;
}

.sc_button_clear {
  background-color: #fff;
  padding: 20px 38px 20px 38px;
  font-size: 14px;
  font-weight: bold;
  color: #4a4a4a;
  text-transform: uppercase;
  margin-left: 0px;
  border: 1px solid #eaeaea;
}

.sc_button_continue {
  background-color: #fff;
  padding: 20px 38px 20px 38px;
  font-size: 14px;
  font-weight: bold;
  color: #4a4a4a;
  text-transform: uppercase;
  margin-right: 0px;
  border: 1px solid #eaeaea;
}
</style>
