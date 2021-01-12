<template>
     <div class="singlePage__slider">
          <div class="slider__pagination slider__pagination_left"><a href="#">
               <i class="fa fa-angle-left"></i></a>
          </div>
          <img class="singlePage__slider_img" src="../assets/imgs/slide_img.png" alt="">
          <div class="slider__pagination slider__pagination_right"><a href="#">
               <i class="fa fa-angle-right"></i></a>
          </div>
     </div>
</template>

<script>

export default {
  name: 'SinglePageSlider',
};
</script>

<style lang="css">
.singlePage__slider {
  height: 777px;
  width: 1600px;
  background-color: #f7f7f7;
  border: 1px solid #eaeaea;
  text-align: center;
  display: inline-block;
  margin-bottom: 763px;
  position: relative;
}

.slider__pagination {
  position: absolute;
  width: 47px;
  height: 47px;
  background-color: rgba(42, 42, 42, 0.15);
  top: 310px;
}

.slider__pagination a {
  display: block;
  font-size: -24px;
  color: white;
  line-height: 45px;
}

.slider__pagination:hover {
  background-color: #f16d7f;
  -webkit-transform: scale(-1);
          transform: scale(-1);
}

.slider__pagination_right {
  right: 0px;
}
</style>
