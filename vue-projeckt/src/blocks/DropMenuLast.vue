<template>
<div class="drop drop__last">
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
.drop__last {
  right: 0;
  -webkit-animation: slide-in-elliptic-right-fwd 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation: slide-in-elliptic-right-fwd 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes slide-in-elliptic-right-fwd {
  0% {
    -webkit-transform: translateX(800px) rotateY(-30deg) scale(0);
    transform: translateX(800px) rotateY(-30deg) scale(0);
    -webkit-transform-origin: -100% 50%;
    transform-origin: -100% 50%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotateY(0) scale(1);
    transform: translateX(0) rotateY(0) scale(1);
    -webkit-transform-origin: -1800px 50%;
    transform-origin: -1800px 50%;
    opacity: 1;
  }
}

</style>
