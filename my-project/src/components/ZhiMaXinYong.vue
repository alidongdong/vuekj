<template>
    <div id="ZhiMaXinYong">
        <Information></Information>
        <Record></Record>
        <Presentation></Presentation>
    </div>
</template>
<script>
import Information from './Information/Information';
import Record from './Record/Record';
import Presentation from './Presentation/Presentation';

export default {
  name: 'ZhiMaXinYong',
  components: {
    Information,
    Record,
    Presentation,
  },
//   data() {},
};
</script>

<style scoped >
    @import "../css/ZhiMaXinYong.css";
</style>
