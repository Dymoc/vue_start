<template>
     <div class="banner__luxirous">
          <a href="#"><img src="../assets/imgs/banner_luxirous.png" alt="">
               <div class="badge">
                    <h1>LUXIROUS &amp; trendy</h1>
                    <p class="siteColor">ACCESORIES</p>
               </div>
          </a>
     </div>
</template>

<script>

export default {
  name: 'Luxirous',
};
</script>

<style lang="css" scoped>
.banner__luxirous {
  margin-top: 20px;
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
