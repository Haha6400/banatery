<script setup lang="ts">
import ProductItem from './ProductItem.vue'
import { ref, computed } from 'vue';

const images = [
  "@/assets/7.png",
  "@/assets/8.png",
  "@/assets/9.png",
  "@/assets/10.jpg"
];

const currentIndex = ref(0);
let currentImage = computed(() => images[currentIndex.value]);

function nextImage() {
  if (currentIndex.value < images.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
}

function prevImage() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = images.length - 1;
  }
}

</script>

<template>
    <div style = "padding: 2%; background-color: var(--green-5);"> 
    <div style="margin:0 5%; padding: 2%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <h3>BÓC TÁCH LÕI PIN</h3>
      <img alt="Battery core" src="./image/core.png" width="90%" style = "margin: 0 2%"/>
    </div>
    </div>
    <div class="image-container">
          <img alt="Battery core" src="./image/Left.png" class="image-left" @click="prevImage"/>
          <img alt="Battery core" :src="currentImage" class="image-center" />
          <img alt="Battery core" src="./image/Right.png" class="image-right" @click="nextImage"/>
    </div>
    <span class="text-custom">
      <span class = "orange">Pin Banatery </span>
      là giải pháp thay thế cho Pin truyền thống 
      <div>và có hiệu năng vượt trội, thân thiện môi trường</div>
    </span>
    <div style = " background-color: var(--green-5);"> 
      <img alt="Battery core" src="./image/business.png" width="100%" />
    </div>
</template>

<style scoped>
.orange {
  color: var(--color-text-3) !important;
  font-weight: 650 !important; /* Use a numeric value or a keyword like 'bold' */
}

.text-custom{
  font-style: italic !important;
  display: inline-block;
  text-align: center !important;
  padding: 2% 20%;
  font-size: 26px;
  line-height: 1.5; /* Adjust as needed for better line spacing */
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.image-left, .image-right {
  width: 5%;
    cursor: pointer; /* Change cursor to pointer on hover */
}

.image-center {
  width: 65%;
  margin: 0 5%;
}
h3 {
  font-size: 34px;
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