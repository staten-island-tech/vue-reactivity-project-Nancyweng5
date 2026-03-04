<template>
  <div class = "app">
    <navigationbar/>
    <RouterView/>
  </div>
</template>

<script setup>
import navigationbar from "@/Components/navigationbar.vue"
import { RouterView } from "vue-router"
</script>

<style scoped>
</style>