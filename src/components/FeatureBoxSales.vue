<template>
     <div class="feature__box_sales">
          <img src="../assets/imgs/sales.png" alt="">
          <h1>Sales &amp; discounts</h1>
          <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with
                extensive models.
          </p>
     </div>
</template>

<script>

export default {
  name: 'FeatureBoxSales',
};
</script>

<style lang="css">
.feature__box_sales {
  position: absolute;
  top: 215px;
  left: 800px;
  width: 300px;
}

.feature__box_sales img {
  float: left;
}

.feature__box_sales h1 {
  left: 34px;
  font-size: 20px;
  font-weight: bold;
  color: #fbfbfb;
  letter-spacing: 0.03em;
  padding-left: 78px;
}

.feature__box_sales p {
  left: 34px;
  font-size: 14px;
  font-weight: 300;
  color: #fbfbfb;
  letter-spacing: 0.03em;
  line-height: 24px;
  padding-left: 78px;
}
</style>
