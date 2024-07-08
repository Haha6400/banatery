<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function scrollToSection(sectionId: string) {
    if (sectionId) {
      window.open(`/${sectionId}`);
    }
  }
</script>

<template>
  <div class="wrapper">
    <img alt="Battery logo" class="logo" onclick='window.open("https://www.facebook.com/banatery?mibextid=LQQJ4d", "_blank");' src="@/assets/team-logo.png" width="30%" />
    <div class="greetings">
      <h1 class="green">Dự án phát triển pin Lithium từ vỏ chuối</h1>
      <h3>Năng lượng xanh đến từ tương lai!</h3>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 650;
  font-size: 34px;
  position: relative;
  top: -10px;
  color: white;
}

h3 {
  font-size: 30px;
    font-style: italic;
    color: white;
}

h1, h3 {
    text-align: center !important;
}
.greetings h1,
.greetings h3 {
  text-align: center;
}
@media {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    align-content: center;
  }
.wrapper {
    flex-direction: column; /* Sắp xếp theo chiều dọc */
    display: flex;
    place-items: flex-center;
    flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
        background-size: cover;
  background-position: center;
    background-image: url('@/assets/bgr-home.png');
  }

  nav {
    margin-left: 0;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
