<template>
    <div class="footer">
        <div class="footer_up center">
            <About/>
            <Company/>
            <Information/>
            <ShopCategory/>
        </div>
        <div class="footer_copyright_and_social">
            <div class="footer_all_rights">&copy; 2020 Brand All Rights Reserved.</div>
            <FooterSocial/>
        </div>
    </div>
</template>

<script>
import { dom } from '@fortawesome/fontawesome-svg-core';
import About from '@/components/About.vue';
import Company from '@/components/Company.vue';
import Information from '@/components/Information.vue';
import ShopCategory from '@/components/ShopCategory.vue';
import FooterSocial from '@/components/FooterSocial.vue';

dom.watch();

export default {
  name: 'Footer',
  components: {
    About,
    Company,
    Information,
    ShopCategory,
    FooterSocial,
  },
};
</script>

<style lang="css">
.footer {
  margin-top: 109px;
}

.footer_up {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.footer_up_h1 {
  font-size: 18px;
  font-weight: bold;
  color: #f16d7f;
  letter-spacing: 0.03em;
  line-height: 26px;
}

.footer nav {
  margin-top: 10px;
}

.footer nav:hover .footer_up_h1 {
  -webkit-animation: text-pop-up-top 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation: text-pop-up-top 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes text-pop-up-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc,
     0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc,
      0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
}

@keyframes text-pop-up-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc,
     0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc,
      0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
}

.footer nav ul {
  list-style-type: none;
  margin-top: 30px;
}

.footer .nav_link {
  font-family: 'Lato';
  font-size: 16px;
  color: #898989;
  letter-spacing: 0.03em;
  line-height: 42px;
}

.footer .nav_link:hover {
  color: #f16d7f;
}

.footer_copyright_and_social {
  height: 79px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  background-color: #e6e6e6;
  margin-top: 65px;
  padding-top: 24px;
}

.footer_all_rights {
  font-size: 16px;
  color: #7a7a7a;
  letter-spacing: 0.03em;
  line-height: 42px;
}
</style>
