<template>
     <div class="sc_info_total">
          <div class="sc_info_total_sub">Sub total ${{ totalCoast }}</div>
          <div class="sc_info_total_grund">GRAND TOTAL <span class="siteColor">
               ${{ totalCoast }}</span></div>
          <router-link :to="{ name: 'Checkout'}">
            <button class="sc_info_total_button">proceed to checkout</button>
          </router-link>
     </div>
</template>

<script>

export default {
  name: 'ScInfoTotal',
  computed: {
    totalCoast() {
      return this.$store.state.goods.totalCoast;
    },
  },
};
</script>

<style lang="css">

.sc_info_total_sub {
  font-size: 11px;
  color: #4a4a4a;
  text-transform: uppercase;
  margin-top: 40px;
}

.sc_info_total_grund {
  font-size: 16px;
  font-weight: bold;
  color: #222222;
  text-transform: uppercase;
  margin-top: 14px;
}

.sc_info_total_button {
  width: 273px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  margin-top: 42px;
  background-color: #f16d7f;
  border: none;
}

.sc_info_total_button:hover {
  outline: 2px solid #000;
}

</style>
