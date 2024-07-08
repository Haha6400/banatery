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
/* Add scoped styles if needed */
</style>
