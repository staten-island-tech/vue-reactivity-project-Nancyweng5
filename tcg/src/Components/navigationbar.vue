<template>
    <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/pack">Pack</router-link>
    <router-link to="/index">Index</router-link>
  </nav>
</template>

<script setup>

</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  background: #7b9acc;
}
a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}
</style>