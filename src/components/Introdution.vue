<script setup lang="ts">
import DoneIcon from './icons/IconDone.vue'

</script>

<template>
  <div class="overview">
    <div class = "introduction">
      <div>Bạn có tin rằng <span class = "orange">vỏ chuối </span> - thứ tưởng chừng vô dụng - có thể thay đổi thế giới không?</div>
      <div>Hãy cùng  <span class = "orange">Banatery</span> tìm hiểu Bí quyết  <span class = "orange">năng lượng xanh</span> ẩn chứa trong vỏ chuối nhé!</div>
    </div>
  </div>
</template>

<style scoped>

.orange {
  color: var(--color-text-3) !important;
  font-weight: 650 !important; /* Use a numeric value or a keyword like 'bold' */
}

.introduction{
  padding: 5%;
  min-height: 60vh;
  text-weight: border;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  font-size: 26px;
}
</style>