<template>
    <div class="card">
    <img :src="card.image" />
  </div>
</template>

<script setup>
defineProps({
  card: Object
})
</script>

<style scoped>
.card {
  width: 200px;
  border-radius: 10px;
}
.card img {
  width: 100%;
}
</style>