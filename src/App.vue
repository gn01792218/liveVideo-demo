<template>
  <div class="app">
    <Home/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Home from '@/views/Home.vue'
export default defineComponent({
  components: {
    Home,
  },
});
</script>

<style lang="scss">
  .app{
    width:1280px;
    max-height: 100vh;
    margin-left: auto;
    margin-right: auto;
  }

</style>
