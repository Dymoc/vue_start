<template>
     <div class="sc_info_address">
          <div class="sc_info_address_h1">Shipping Adress</div>
          <form action="" class="sc_info_address_form">
               <select class="sc_info_address_cantry">
                    <option value="">Bangladesh</option>
                    <option value="">USA</option>
                    <option value="">Russia</option>
               </select>
               <input type="text" class="sc_info_address_state" placeholder="State">
               <input type="text" class="sc_info_address_zip" placeholder="Postcode / Zip">
               <button class="sc_info_address_button">get a quote</button>
          </form>
     </div>
</template>

<script>

export default {
  name: 'ShopingCart',

};
</script>

<style lang="css">
.sc_info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 63px;
}

.sc_info_address {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.sc_info_address_form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.sc_info_address_h1 {
  font-size: 16px;
  font-weight: bold;
  color: #222222;
  text-transform: uppercase;
  text-align: left;
  margin-left: 0px;
  margin-bottom: 22px;
}

.sc_info_address_cantry {
  width: 355px;
  height: 45px;
  font-size: 13px;
  font-weight: 300;
  color: #b1b1b1;
  padding-left: 18px;
  margin-bottom: 20px;
  border: 1px solid #eaeaea;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background: url("../assets/imgs/caret-down-solid.svg") no-repeat center;
  background-position: 330px;
  outline: 0;
}

.sc_info_address_state {
  width: 355px;
  height: 45px;
  font-size: 13px;
  font-weight: 300;
  color: #b1b1b1;
  padding-left: 18px;
  padding-right: 18px;
  margin-bottom: 20px;
  border: 1px solid #eaeaea;
}

.sc_info_address_zip {
  width: 355px;
  height: 45px;
  font-size: 13px;
  font-weight: 300;
  color: #b1b1b1;
  padding-left: 18px;
  padding-right: 18px;
  margin-bottom: 20px;
  border: 1px solid #eaeaea;
}

.sc_info_address_button {
  width: 100px;
  height: 35px;
  margin-left: 0px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  font-size: 11px;
  font-weight: bold;
  color: #4a4a4a;
  text-transform: uppercase;
}
</style>
