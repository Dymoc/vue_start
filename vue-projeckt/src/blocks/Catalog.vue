<template>
<div name="add_to_cart" class = "tovar_cart">
    <div class = "add_to_cart" >
        <a><img src = "../assets/imgs/tovar_hover.png" alt = ""></a>
        <div  style="cursor:pointer" class = "button_add_to_cart"
        id = "${this.$store.state.items[0].productId}"> Add to Cart</div>
    </div>
    <img src = "${item.productImg}" alt = "">
    <!-- <div class = "tovar_info" > {{ this.$store.state.count }}</div> -->
    <div class = "tovar_price siteColor">{ this.$store.state.items }</div>
    <div class = "stars"><img src = "../assets/imgs/stars.png" alt = ""></div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Catalog',
  methods: {
    // ...mapGetters(['getProduct']),
  },
  mounted() {
    // console.log('no');
    // console.log(this.$store.state.items[0].productName);
    // console.log('yes');
    // this.getProduct();
  },
};
</script>

<style lang="css">

</style>
