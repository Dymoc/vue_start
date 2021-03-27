<template>
     <div class="sc_info_coupon">
          <div class="sc_info_coupon_h1">coupon discount</div>
          <form action="" class="sc_info_coupon_form">
               <div class="sc_info_coupon_text">Enter your coupon code you have one</div>
               <input type="text" class="sc_info_coupon_number" placeholder="State">
               <button class="sc_info_coupon_button">Apply coupon</button>
          </form>
     </div>
</template>

<script>

export default {
  name: 'ScInfoCupon',
};
</script>

<style lang="css">
.sc_info_coupon {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.sc_info_coupon_h1 {
  font-size: 16px;
  font-weight: bold;
  color: #222222;
  text-transform: uppercase;
  text-align: left;
  margin-left: 0px;
  margin-bottom: 22px;
}

.sc_info_coupon_form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.sc_info_coupon_text {
  font-size: 14px;
  font-weight: 300;
  color: black;
  margin-left: 0px;
}

.sc_info_coupon_number {
  width: 355px;
  height: 45px;
  margin-top: 22px;
  font-size: 13px;
  font-weight: 300;
  color: #b1b1b1;
  padding-left: 18px;
  padding-right: 18px;
  margin-bottom: 20px;
  border: 1px solid #eaeaea;
}

.sc_info_coupon_button {
  width: 118px;
  height: 35px;
  margin-left: 0px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  font-size: 11px;
  font-weight: bold;
  color: #4a4a4a;
  text-transform: uppercase;
}

.sc_info_total {
  width: 360px;
  height: 214px;
  background-color: #e6e6e6;
  text-align: right;
  padding-right: 41px;
}
</style>
