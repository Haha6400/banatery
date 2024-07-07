<script setup lang="ts">
defineProps<{
  msg: string,
  scrollToSection: (sectionId: string) => void
}>()

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
</script>

<template style = "background-image: url('@/assets/bgr1-100.jpg');">
<div class="wrapper">
<img alt="Banatery logo" class="logo" src="@/assets/team-logo.png" width="30%"/>
  <div class="greetings">
    <h1 class = "green">Dự án phát triển pin Lithium từ vỏ chuối</h1>
    <h3 >
      Năng lượng xanh đến từ tương lai!
    </h3>
    <nav style="text-align: center !important">
        <RouterLink to = "/" @click="scrollToSection('product')">Product</RouterLink>
        <RouterLink to = "/pin-core" @click="scrollToSection('structure')">Battery Core</RouterLink>
        <RouterLink to = "/about" @click="scrollToSection('about-us')">About Us</RouterLink>
      </nav>
  </div>
      </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 24px;
}

h1, h3 {
    text-align: center !important;
}
.greetings h1,
.greetings h3 {
  text-align: center;
}

nav {
  width: 100%;
  height: 200%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
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

  header .wrapper {
    flex-direction: column; /* Sắp xếp theo chiều dọc */
    display: flex;
    place-items: flex-center;
    flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  }

  nav {
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
