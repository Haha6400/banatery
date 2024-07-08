<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/Home.vue'
import Product from './components/Product.vue'
import AboutUs from './components/AboutUs.vue'
import Structure from './components/Structure.vue'
import Business from './components/Business.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <header>
    <Home />
    <Product id="product" />
    <Structure id = "structure" />
    <Business id="business" />
    <AboutUs id="about-us" />
    <Footer />
  </header>
</template>

<style scoped>
/* Add scoped styles if needed */
</style>
