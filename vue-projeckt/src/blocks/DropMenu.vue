<template>
<div class="drop">
     <DropFlex/>
     <DropFlex/>
</div>
</template>

<script>
import DropFlex from '@/components/DropFlex.vue';

export default {
  name: 'DropMenu',
  components: {
    DropFlex,
  },
};
</script>

<style lang="css">
.drop {
  border-radius: 5px;
  padding: 12px 20px;
  position: absolute;
  background-color: #fff;
  display: none;
  top: 48px;
  z-index: 100;
  -webkit-animation: slide-in-elliptic-left-fwd 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation: slide-in-elliptic-left-fwd 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-elliptic-left-fwd {
  0% {
    -webkit-transform: translateX(-800px) rotateY(30deg) scale(0);
    transform: translateX(-800px) rotateY(30deg) scale(0);
    -webkit-transform-origin: -100% 50%;
    transform-origin: -100% 50%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotateY(0) scale(1);
    transform: translateX(0) rotateY(0) scale(1);
    -webkit-transform-origin: 1800px 50%;
    transform-origin: 1800px 50%;
    opacity: 1;
  }
}

@keyframes slide-in-elliptic-left-fwd {
  0% {
    -webkit-transform: translateX(-800px) rotateY(30deg) scale(0);
    transform: translateX(-800px) rotateY(30deg) scale(0);
    -webkit-transform-origin: -100% 50%;
    transform-origin: -100% 50%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotateY(0) scale(1);
    transform: translateX(0) rotateY(0) scale(1);
    -webkit-transform-origin: 1800px 50%;
    transform-origin: 1800px 50%;
    opacity: 1;
  }
}

</style>
