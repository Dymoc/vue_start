<template>
     <div class="sc_info">
          <ScInfoAdress/>
          <ScInfoCupon/>
          <ScInfoTotal/>
     </div>
</template>

<script>
import ScInfoAdress from '@/components/ScInfoAdress.vue';
import ScInfoCupon from '@/components/ScInfoCupon.vue';
import ScInfoTotal from '@/components/ScInfoTotal.vue';

export default {
  name: 'ScInfo',
  components: {
    ScInfoAdress,
    ScInfoCupon,
    ScInfoTotal,
  },
};
</script>
