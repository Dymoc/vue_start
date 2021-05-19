<template>
     <div class="footer_social">
          <div class="social_icon"><a href="#"><i class="fa fa-facebook-f"></i></a></div>
          <div class="social_icon"><a href="#"><i class="fa fa-twitter"></i></a></div>
          <div class="social_icon"><a href="#"><i class="fa fa-linkedin-in"></i></a></div>
          <div class="social_icon"><a href="#"><i class="fa fa-pinterest-p"></i></a></div>
          <div class="social_icon"><a href="#"><i class="fa fa-google-plus-g"></i></a></div>
     </div>
</template>

<script>

export default {
  name: 'FooterSocial',
};
</script>

<style lang="css">
.footer_social {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 191px;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.social_icon {
  height: 32px;
  width: 32px;
  background-color: white;
  position: relative;
}

.social_icon:hover {
  background-color: #f16d7f;
}

.social_icon a {
  width: 32px;
  position: absolute;
  top: 1px;
  line-height: 32px;
  padding-left: 10px;
}

.fa {
  font-size: 16px;
  color: #b2b2b2;
  text-align: right;
  letter-spacing: 0.03em;
}

.social_icon:hover .fa {
  font-size: 16px;
  color: #f7f7f8;
  /* color: #f16d7f; */
  text-align: right;
  letter-spacing: 0.03em;
}

</style>
