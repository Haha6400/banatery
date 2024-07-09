<script setup lang="ts">
import ProductItem from './ProductItem.vue'

</script>

<template>
  <div class="greetings">
        <h3>VỀ <img alt="Battery logo" class="logo" onclick='window.open("https://www.facebook.com/banatery?mibextid=LQQJ4d", "_blank");' src="@/assets/team-logo.png" width="15%" style="margin-bottom: -1%;"/></h3>
        <h4>Dự án Pin Banatery là giải pháp thay thế cho Pin truyền thống 
        </h4>
        <h4>với hiệu năng vượt trội, thân thiện với môi trường 
        </h4>
        <h4>(tận dụng nguồn nguyên vật liệu Vỏ chuối - Biomass) với những ưu thế vượt trội. </h4>
    </div>
</template>

<style scoped>
.greetings{
  text-align: center;
  text-justify: center;
  min-height: 40vh;
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