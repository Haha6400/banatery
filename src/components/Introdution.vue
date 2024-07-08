<script setup lang="ts">
import ProductItem from './ProductItem.vue'
import DoneIcon from './icons/IconDone.vue'

</script>

<template>
  <div class="overview">
    <div class = "introduction">
      <div>Bạn có tin rằng vỏ chuối - thứ tưởng chừng vô dụng - có thể thay đổi thế giới không?</div>
      <div>Hãy cùng Banatery tìm hiểu Bí quyết năng lượng xanh ẩn chứa trong vỏ chuối nhé!</div>
    </div>
  </div>
</template>

<style scoped>

.introduction{
  padding: 5%;
  min-height: 60vh;
  text-weight: border;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  font-size: 26px;
  background-color: var(--green-5);
}
</style>