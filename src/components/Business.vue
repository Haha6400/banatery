<script setup lang="ts">
import ProductItem from './ProductItem.vue'
import DoneIcon from './icons/IconDone.vue'

</script>

<template>
    <div style="margin:0 5%; padding: 2%; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 2px solid var(--text-primary); border-radius: 15px;">
            <h3>MÔ HÌNH KINH DOANH</h3>
            <img style="margin-top: 1%;" alt="Battery core" src="./image/business.png" width="90%"/>
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