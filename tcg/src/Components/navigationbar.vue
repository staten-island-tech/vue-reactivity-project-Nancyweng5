<template>
    <nav>
    <RouterLink to="/"><button>Home</button></RouterLink>
    <RouterLink to="/pack"><button>Pack</button></RouterLink>
    <RouterLink to="/index"><button>Index</button></RouterLink>
  </nav>
</template>
<script setup>
import { RouterLink } from 'vue-router';

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