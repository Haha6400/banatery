<script setup lang="ts">
import Introdution from '../components/Introdution.vue'
import Structure from '../components/Structure.vue'
import Product from '../components/Product.vue'
</script>

<template>
<nav style = "background-color: var(--green-6);">
<img alt="Battery logo" class="logo" onclick='window.open("https://www.facebook.com/banatery?mibextid=LQQJ4d", "_blank");' src="@/assets/team-logo - Copy.png" width="15%" style="margin: 0 2% -2% 0 0;"/>
      <RouterLink to="/">Trang chủ</RouterLink>
      <RouterLink to="/products">Sản phẩm</RouterLink>
      <RouterLink to="/feedback">Feedback</RouterLink>
      <RouterLink to="/achievement">Thành tựu</RouterLink>
      <RouterLink to="/about">Về chúng tôi</RouterLink>
      </nav>
</template>
<style scoped>
nav {
  width: 100%;
  height: 200%;
  font-size: 26px;
  margin-left: 10px;
  padding-bottom: 1%;
}
nav a:hover{
  background-color: var(--green-3);
  border-radius: 10px;
}
nav a.router-link-exact-active {
  color: var(--color-text-primary);
  border-radius: 10px;
}
nav a.router-link-exact-active{
  background-color: var(--green-5);
}

nav a {
  display: inline-block;
  border-left: 1px solid var(--color-border);
  padding: 0 2%;
}

nav a:first-of-type {
  border: 0;
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
    font-size: 22px;
  }
}
</style>