<template>
    <div class = "home">
      <h2>home</h2>
      <div class = "topack">
        <img @click = "" src = "/packcover.webp">
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
  height: 80vh;
  background-color: #FCF6F5;
}
.packcover {
    width: 250px;
}
</style>