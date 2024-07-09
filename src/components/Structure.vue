<script setup lang="ts">
import ProductItem from './ProductItem.vue'
import { ref, computed } from 'vue';

const images = [
  "./image/7.png",
  "./image/8.png",
  "./image/9.png",
  "./image/10.jpg"
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
    <div class="greetings">
    <div style="margin:0 5%; padding: 2%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <h3>ƯU THẾ SẢN PHẨM</h3>
    </div>
        <div class="container">
          <div class="left-side" >
            <img alt="Battery" src="./image/pin.png" style="margin-left: 50%;" width="50%"/>
          </div>
          <div class="right-side">
            <div>
                <ProductItem>
                    <template #icon>
                        <img src="./image/DoneIcon.png" width="100%"/>
                    </template>
                    <template #heading>Giảm 15%</template>
                    khối lượng pin
                </ProductItem>
            
                <ProductItem>
                    <template #icon>
                        <img src="./image/DoneIcon.png" width="100%"/>
                    </template>
                    <template #heading>Tăng 52%</template>
                    dung lượng pin
                </ProductItem>

                <ProductItem>
                    <template #icon>
                        <img src="./image/DoneIcon.png" width="100%"/>
                    </template>
                    <template #heading>Tăng 41%</template>
                    dung lượng sạc pin
                </ProductItem>
            </div>
          </div>
        </div>
      </div>
    <div class="custome">
    <img alt="Battery core" src="./image/core (2).png" class="image-center" />
    <span class="text-custom">
      <span class = "orange">Pin Banatery </span>
      là giải pháp thay thế cho Pin truyền thống 
      <div>và có hiệu năng vượt trội, thân thiện môi trường</div>
    </span>
    </div>
    <div> 
      <img alt="Battery core" src="./image/business.png" width="100%" />
    </div>
</template>

<style scoped>
.custome{
  background-color: var(--green-5);
}
.orange {
  color: var(--color-text-3) !important;
  font-weight: 650 !important; /* Use a numeric value or a keyword like 'bold' */
}
.container {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Chia đôi trang thành hai cột bằng nhau */
    gap: 20px; /* Khoảng cách giữa hai cột */
    min-height: 60vh;
  }

  .left-side {
    padding-right: 20px;
  }

  .right-side {
    padding-right: 20px;
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
  width: 80%;
  margin: 0 10%;
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