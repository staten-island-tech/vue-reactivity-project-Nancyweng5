<template>
  <div>
    <Navigationbar/>
    <RouterView/>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { RouterView } from "vue-router"
import Navigationbar from "./Components/navigationbar.vue";
const currentpage = ref("home")
</script>

<style scoped>

</style>