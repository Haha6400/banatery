<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import Header from './views/Header.vue';

</script>

<template>
<Header/>
  <main>
    <RouterView />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
Header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure it stays on top */
}
</style>
