<script setup lang="ts">
import ProductItem from './ProductItem.vue'
import DoneIcon from './icons/IconDone.vue'

</script>

<template>
    <div class="container">
  <div class="left-side">
    <div class="greetings">
        <h3>VỀ BANATERY</h3>
        Dự án Pin Banatery là giải pháp thay thế cho Pin truyền thống với hiệu năng vượt trội, thân thiện với môi trường (tận dụng nguồn nguyên vật liệu Vỏ chuối - Biomass) với những ưu thế vượt trội
    </div>
  </div>
  <div class="right-side">
    <div class="greetings">
        <h2>Ưu thế sản phẩm</h2>
        <div>
            <ProductItem>
                <template #icon>
                    <DoneIcon />
                </template>
                <template #heading>Giảm 15%</template>
                khối lượng pin
            </ProductItem>
        
            <ProductItem>
                <template #icon>
                    <DoneIcon />
                </template>
                <template #heading>Tăng 52%</template>
                dung lượng pin
            </ProductItem>

            <ProductItem>
                <template #icon>
                    <DoneIcon />
                </template>
                <template #heading>Tăng 41%</template>
                dung lượng sạc pin
            </ProductItem>
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
  font-size: 26px;
  font-weight: 650;
  margin-bottom: 0.4rem;
  margin-top: 0.4rem;
  color: var(--color-text-primary);
}
h2 {
    font-size: 24px;
    margin-bottom: 0.4rem;
    font-weight: 500;
    margin-top: 0.4rem;
    color: var(--color-text-primary);
}


</style>