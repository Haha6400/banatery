<script setup lang="ts">
import ProductItem from './ProductItem.vue'
import DoneIcon from './icons/IconDone.vue'

</script>

<template>
    <div style = "padding: 2%; background-color: var(--green-5); min-height: 60vh;"> 
      <img alt="Battery core" src="./image/pin-core-2.png" width="90%" style = "margin: 0 5%"/>
    </div>
    <div style = "padding: 2%; min-height: 60vh;"> 
      <img alt="Battery core" src="./image/business.png" width="90%" style = "margin: 0 5%"/>
    </div>
</template>

<style scoped>
h3 {
  font-size: 26px;
  font-weight: 650;
  text-align: center !important;
  width: fit-content;
  padding: 1%;
  margin: 1%;
  color: white;
  border-radius: 5px;
  background-color: var(--color-text-primary);
}

</style>