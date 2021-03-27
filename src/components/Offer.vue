<template>
     <div class="banner__offer">
          <a href="#"><img src="../assets/imgs/banner_offer.png" alt="">
               <div class="badge">
                    <h1>30% offer</h1>
                    <p class="siteColor">women</p>
               </div>
          </a>
     </div>
</template>

<script>

export default {
  name: 'Offer',
};
</script>

<style lang="css" scoped>
.banner__offer {
  position: relative;
}
.badge {
  background-color: #fff;
  position: absolute;
  top: 26px;
}

.badge h1 {
  font-family: 'Lato';
  font-size: 18px;
  font-weight: 900;
  color: #222222;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-left: 18px;
  margin-right: 18px;
  margin-top: 16px;
}

.badge p {
  font-family: 'Lato';
  font-size: 30px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-left: 18px;
  margin-right: 18px;
  margin-bottom: 16px;
}
</style>
