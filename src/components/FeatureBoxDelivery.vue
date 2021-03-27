<template>
     <div class="feature__box_delivery">
          <img src="../assets/imgs/delivery.png" alt="">
          <h1>Free Delivery</h1>
          <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with
               extensive models.</p>
     </div>
</template>

<script>

export default {
  name: 'FeatureBoxDelivery',
};
</script>

<style lang="css">
.feature__box_delivery {
  position: absolute;
  top: 60px;
  left: 800px;
  width: 300px;
}

.feature__box_delivery img {
  float: left;
}

.feature__box_delivery h1 {
  left: 34px;
  font-size: 20px;
  font-weight: bold;
  color: #fbfbfb;
  letter-spacing: 0.03em;
  padding-left: 78px;
}

.feature__box_delivery p {
  left: 34px;
  font-size: 14px;
  font-weight: 300;
  color: #fbfbfb;
  letter-spacing: 0.03em;
  line-height: 24px;
  padding-left: 78px;
}
</style>
