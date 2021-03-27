<template>
  <div class="sc_product_cols_name">
    <h1 class="sc_product_cols_name_h1 ">Product&nbsp;Details</h1>
    <h1 class="sc_product_cols_name_h1">unite Price</h1>
    <h1 class="sc_product_cols_name_h1">Quantity</h1>
    <h1 class="sc_product_cols_name_h1">shipping</h1>
    <h1 class="sc_product_cols_name_h1">Subtotal</h1>
    <h1 class="sc_product_cols_name_h1">ACTION</h1>
  </div>
</template>

<script>

export default {

  name: 'ScProductColsName',
  components: {
  },
};
</script>

<style lang="css">
.sc_product_cols_name {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-top: 71px;
}

.sc_product_cols_name_h1 {
  height: 12px;
  font-family: 'Lato';
  font-size: 13px;
  font-weight: bold;
  color: #222222;
  letter-spacing: -0.01em;
  line-height: 20px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
  margin-right: 0px;
  text-align: right;
}

.sc_product_cols_name_h1:first-child {
  text-align: left;
  padding-right: 300px;
  margin-left: 0px;
}

</style>
