<template>
 <artical class="feature__box_quality">
          <img src="../assets/imgs/quality.png" alt="">
          <h1>Quality assurance</h1>
          <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with
                extensive models.
          </p>
     </artical>
</template>

<script>

export default {
  name: 'FeatureBoxQuality',
};
</script>

<style lang="css">
.feature__box_quality {
  position: absolute;
  top: 375px;
  left: 800px;
  width: 300px;
}

.feature__box_quality img {
  float: left;
}

.feature__box_quality h1 {
  left: 34px;
  font-size: 20px;
  font-weight: bold;
  color: #fbfbfb;
  letter-spacing: 0.03em;
  padding-left: 78px;
}

.feature__box_quality p {
  left: 34px;
  font-size: 14px;
  font-weight: 300;
  color: #fbfbfb;
  letter-spacing: 0.03em;
  line-height: 24px;
  padding-left: 78px;
}
</style>
