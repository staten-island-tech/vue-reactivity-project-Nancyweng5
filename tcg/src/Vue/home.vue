<template>
    <div class = "home">
      <div class = "topack">
        <RouterLink to="/pack">
          <img src="/packcover.png">
        </RouterLink>
      </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style  scoped>
.home {
display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #FCF6F5;
}
.packcover {
    width: 200px;
}
</style>