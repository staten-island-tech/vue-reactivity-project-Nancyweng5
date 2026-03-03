<template>
  <div>
    <RouterView/>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Navigationbar from "@/Components/navigationbar.vue"
import { RouterView } from "vue-router"
const currentpage = ref("home")
</script>

<style scoped>

</style>