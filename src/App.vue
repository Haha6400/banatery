<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/Home.vue'
import Product from './components/Product.vue'
import AboutUs from './components/AboutUs.vue'
import Structure from './components/Structure.vue'

</script>

<template>
  <header>
    <Home />
    <Product id="product" />
    <Structure id = "structure" />
    <AboutUs id="about-us" />
  </header>
</template>

<style scoped>
/* Add scoped styles if needed */
</style>
