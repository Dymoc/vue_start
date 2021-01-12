<template>
     <div class="feature__banner">
          <img class="feature__banner_img" src="../assets/imgs/feature_banner.png" alt="">
          <img class=feature__shadow src="../assets/imgs/feature_banner_shadow.png" alt="">
          <div class="feature__text">
               <h1>30%<span class="siteColor"> OFFER</span></h1>
               <p>FOR WOMEN</p>
          </div>
     </div>
</template>

<script>

export default {
  name: 'FeatureBaner',
};
</script>

<style lang="css">

.feature__banner_img {
     margin-left: 0px;
}
.feature__shadow {
  position: absolute;
  left: 0px;
}

.feature__text {
  position: absolute;
  top: 146px;
  left: 39px;
}

.feature__text h1 {
  font-size: 54px;
  font-weight: bold;
  color: white;
  letter-spacing: 0.03em;
}

.feature__text p {
  font-size: 32px;
  color: white;
  margin-left: -15px;
}
</style>
