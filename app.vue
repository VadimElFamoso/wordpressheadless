<template>
  <SsrTest/>
</template>

<script>
import 'dotenv/config';  

console.log(process.env.WORDPRESS_HOST);

import SsrTest from './pages/ssrtest.vue';
export default {
  components:{
    SsrTest,
  }
}
</script>

<style>

</style>
