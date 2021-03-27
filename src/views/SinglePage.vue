<template>
     <div>
        <Breadcrumb/>
        <main class="singlePage">
        <SinglePageSlider/>
        <Discription/>
        <section class="similar__tovar">
            <div class="similar__name">you may like also</div>
            <div class="product_tovar_cart center">
                <!-- <div class="tovar_cart ">
                    <div class="add_to_cart">
                        <a href="#"><img src="../assets/imgs/tovar_hover.png" alt=""></a>
                        <a href="#" class="button_add_to_cart">Add to Cart</a>
                    </div>
                    <img src="..assets/imgs/product_img_1.png" alt="">
                    <div class="tovar_info">Mango People T-shirt</div>
                    <div class="tovar_price siteColor">$52.00</div>
                    <div class="stars"><img src="../assets/imgs/stars.png" alt=""></div>
                </div>
                <div class="tovar_cart">
                    <div class="add_to_cart">
                        <a href="#"><img src="../assets/imgs/tovar_hover.png" alt=""></a>
                        <a href="#" class="button_add_to_cart">Add to Cart</a>
                    </div>
                    <img src="../assets/imgs/product_img_2.png" alt="">
                    <div class="tovar_info">Mango People T-shirt</div>
                    <div class="tovar_price siteColor">$52.00</div>
                    <div class="stars"><img src="../assets/imgs/stars.png" alt=""></div>
                </div>
                <div class="tovar_cart">
                    <div class="add_to_cart">
                        <a href="#"><img src="../assets/imgs/tovar_hover.png" alt=""></a>
                        <a href="#" class="button_add_to_cart">Add to Cart</a>
                    </div>
                    <img src="..assets/imgs/product_img_3.png" alt="">
                    <div class="tovar_info">Mango People T-shirt</div>
                    <div class="tovar_price siteColor">$52.00</div>
                    <div class="stars"><img src="../assets/imgs/stars.png" alt=""></div>
                </div>
                <div class="tovar_cart">
                    <div class="add_to_cart">
                        <a href="#"><img src="../assets/imgs/tovar_hover.png" alt=""></a>
                        <a href="#" class="button_add_to_cart">Add to Cart</a>
                    </div>
                    <img src="..assets/imgs/product_img_4.png" alt="">
                    <div class="tovar_info">Mango People T-shirt</div>
                    <div class="tovar_price siteColor">$52.00</div>
                    <div class="stars"><img src="../assets/imgs/stars.png" alt=""></div>
                </div> -->
            </div>
        </section>
    </main>
     </div>
</template>

<script>
import Breadcrumb from '@/blocks/Breadcrumb.vue';
import SinglePageSlider from '@/blocks/SinglePageSlider.vue';
import Discription from '@/blocks/Discription.vue';
import { mapActions } from 'vuex';

export default {
  name: 'SinglePage',
  components: {
    Breadcrumb,
    SinglePageSlider,
    Discription,
  },
  methods: {
    ...mapActions(['showID']),
  },
  mounted() {
    // console.log(this.$route.params.id);
    // console.log(this.getTovars());
    console.log(this.showID(this.$route.params.id));
  },
};
</script>

<style lang="css">

.similar__name {
  font-size: 24px;
  font-weight: 900;
  color: #4d4d4d;
  text-align: center;
  line-height: 20px;
  text-transform: uppercase;
}
</style>
