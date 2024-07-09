<script setup lang="ts">
import ProductItem from './ProductItem.vue'

</script>

<template>
    <div class="container">
  <div class="left-side">
    <div class="greetings">
        <h3>VỀ <img alt="Battery logo" class="logo" onclick='window.open("https://www.facebook.com/banatery?mibextid=LQQJ4d", "_blank");' src="@/assets/team-logo.png" width="40%" style="margin-bottom: -2%;"/></h3>
        <h4>Dự án Pin Banatery là giải pháp thay thế cho Pin truyền thống với hiệu năng vượt trội, thân thiện với môi trường (tận dụng nguồn nguyên vật liệu Vỏ chuối - Biomass) với những ưu thế vượt trội. </h4>
    </div>
  </div>
  <div class="right-side">
    <div class="greetings">
        <h2>Ưu thế sản phẩm</h2>
        <div class="container">
          <div class="left-side">
            <img alt="Battery" src="./image/pin.png" width="100%"/>
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
  </div>
</div>
</template>

<style scoped>
  .container {
    padding: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Chia đôi trang thành hai cột bằng nhau */
    gap: 20px; /* Khoảng cách giữa hai cột */
    min-height: 60vh;
    background-color: var(--green-5);
  }

  .left-side {
    padding-right: 20px;
  }

  .right-side {
    padding-right: 20px;
  }
grid-class {
    display: grid;
    grid-template-columns: 1fr 1fr; 
}
h3 {
  font-size: 34px;
  font-weight: 650;
  margin-bottom: 0.4rem;
  margin-top: 0.4rem;
  color: var(--color-text-primary);
}
h2 {
    font-size: 30px;
    margin-bottom: 0.4rem;
    font-weight: 600;
    margin-top: 0.4rem;
    color: var(--color-text-primary);
}

h4{
  font-size: 24px;
}


</style>