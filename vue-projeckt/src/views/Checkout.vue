<template>
    <div>
        <Breadcrumb/>
         <main class="center">
        <section class="chekout">
            <div class="chekout_h1">01. Shipping Adress</div>
            <div class="form">
                <form class="form_guest">
                    <div class="form_h2">Check as a guest or register</div>
                    <div class="form_h3">Register with us for future convenience</div>
                    <input type="radio" name="guest_or_reg" id="guest" class="form_radio">
                    <label for="guest" class="form_label">checkout as guest</label><br>
                    <input type="radio" name="guest_or_reg" id="reg" class="form_radio">
                    <label for="reg" class="form_label">register</label>
                    <div class="form_h2">register and save time!</div>
                    <div class="form_h3">Register with us for future convenience</div>
                    <details class="form_details">
                    <summary class="form_summary">Fast and easy checkout</summary>
                    <ul class="form_summary_ul">
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                    </ul>
                    </details>
                    <details class="form_details">
                    <summary class="form_summary">
                      Easy access to your order history and status</summary>
                    </details>
                    <button class="checkout_button">cONTINUE</button>
                </form>
                <form class="form_reg">
                    <div class="form_h2">Already registed?</div>
                    <div class="form_h3">Please log in below</div>
                    <div class="form_input_name">EMAIL ADDRESS<span class="siteColor">*</span></div>
                    <input type="email" class="form_input_text">
                    <div class="form_input_name">PASSWORD <span class="siteColor">*</span></div>
                    <input type="password" class="form_input_text">
                    <div class="Required">* Required Fileds</div>
                    <button class="checkout_button">Log in</button>
                    <button class="button_forgot">Forgot Password ?</button>
                </form>
            </div>

        </section>

        <section class="chekout">
            <div class="chekout_h1">02. BILLING INFORMATION</div>
        </section>

        <section class="chekout">
            <div class="chekout_h1">03. SHIPPING INFORMATION</div>
        </section>

        <section class="chekout">
            <div class="chekout_h1">04. SHIPPING METHOD</div>
        </section>

        <section class="chekout">
            <div class="chekout_h1"> 05. PAYMENT METHOD</div>
        </section>

        <section class="chekout">
            <div class="chekout_h1">06. ORDER REVIEW</div>
        </section>
        </main>
    </div>
</template>

<script>

import Breadcrumb from '@/blocks/Breadcrumb.vue';

export default {
  name: 'CatalogMan',
  components: {
    Breadcrumb,
  },
};
</script>

<style lang="css">
.chekout {
  border-bottom: 1px solid silver;
}

.chekout_h1 {
  font-size: 16px;
  font-weight: bold;
  color: #222222;
  line-height: 72px;
  text-transform: uppercase;
}

.chekout:hover .form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.chekout:first-of-type {
  padding-bottom: 0px;
  margin-top: 90px;
}

.form {
  display: none;
}

.form_guest {
  margin: 0px;
}

.form_guest details:first-of-type {
  margin: 33px 0px 5px 0px;
}

.form_h2 {
  font-size: 13px;
  color: #222222;
  text-align: left;
  text-transform: uppercase;
  padding-left: 0px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.form_h3 {
  font-size: 13px;
  color: #b3b2b2;
  line-height: 20px;
}

.form_radio {
  margin-bottom: 20px;
}

.form_radio:first-of-type {
  margin-top: 35px;
}

.form_summary {
  display: block;
  outline: none;
  font-size: 13px;
  color: #b3b2b2;
  line-height: 20px;
}

.form_summary_ul {
  list-style-type: none;
  font-size: 13px;
  color: #b3b2b2;
  line-height: 20px;
}

.form_summary::-webkit-details-marker {
  display: none;
}

.form_summary::before {
  content: '\00BB';
  padding-right: 0.5em;
  font-size: 20px;
}

.form_details[open] > summary::before {
  content: '\00BB';
}

.form_input_name {
  font-size: 12px;
  color: #222222;
  line-height: 20px;
  margin-top: 25px;
  margin-bottom: 16px;
}

.form_input_text {
  width: 490px;
  height: 45px;
  background-color: white;
  border: 1px solid #eaeaea;
  padding: 0px 18px 0px 18px;
  font-size: 17px;
  color: #222222;
}

.Required {
  color: #f16d7f;
  font-size: 13px;
  line-height: 20px;
  margin-top: 22px;
}

.checkout_button {
  width: 180px;
  height: 50px;
  font-size: 14px;
  font-weight: bold;
  color: #4a4a4a;
  text-transform: uppercase;
  background-color: white;
  border: 1px solid #eaeaea;
  margin-top: 38px;
  margin-bottom: 50px;
}

.button_forgot {
  font-size: 14px;
  color: #222222;
  line-height: 20px;
  border: none;
  background-color: white;
  margin-left: 32px;
  margin-bottom: 50px;
}

.button_forgot:hover {
  color: #f16d7f;
  outline: none;
}
</style>
