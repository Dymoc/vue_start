<template>
     <div class="banner center">
        <div class="banner-right">
            <HotDeal/>
            <Luxirous/>
        </div>
        <div class="banner-left">
             <Offer/>
             <New/>
        </div>
    </div>
</template>

<script>
import HotDeal from '@/components/HotDeal.vue';
import Luxirous from '@/components/Luxirous.vue';
import Offer from '@/components/Offer.vue';
import New from '@/components/New.vue';

export default {
  name: 'Banner',
  components: {
    HotDeal,
    Luxirous,
    Offer,
    New,
  },
};
</script>

<style lang="css">
.banner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 98px;
}
.banner-right, .banner-left {
  width: 560px;
}
.banner-right {
  margin-right: 20px;
}
</style>
