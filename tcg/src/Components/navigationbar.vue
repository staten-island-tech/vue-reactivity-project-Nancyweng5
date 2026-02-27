<template>
    <nav>
    <button @click="page.value = 'home'">Home</button>
    <button @click="page.value = 'pack'">Pack</button>
    <button @click="page.value = 'index'">Index</button>
  </nav>
</template>

<script setup>
const props = defineProps({
  page: Object
})
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  background: #FCF6F5;
}
button {
  background: none;
  border: none;
  color: #7b9acc;
  font-size: 18px;
  cursor: pointer;
}
button:hover {
  color: #2f6dcf;
}
</style>