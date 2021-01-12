<template>
    <div class="promo center">
        <div class="promo__content">
            <h1>THE BRAND</h1>
            <p>OF LUXERIOUS <span class="siteColor">FASHION</span></p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Promo',
};
</script>

<style lang="css">

.promo {
  height: 613px;
  background-color: #e8e8e8;
  background-image: url(../assets/imgs/promo.png);
  background-repeat: no-repeat;
  background-position: center -52px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
}

.promo__content {
  margin-top: 224px;
  border-left: 12px solid #f16d7f;
  padding-left: 12px;
  margin-left: 0px;
}

.promo__content h1 {
  font-size: 60px;
  font-weight: 900;
  color: #222222;
  letter-spacing: 0.03em;
  line-height: 0.8em;
  margin-bottom: 18px;
}

.promo__content p {
  font-size: 40px;
  font-weight: 900;
  color: #222222;
  letter-spacing: 0.03em;
  line-height: 0.9em;
}

</style>
