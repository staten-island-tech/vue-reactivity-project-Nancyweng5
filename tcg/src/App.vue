<template>
  <div>
    <navigationbar :page="currentpage" />
    <RouterView/>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Navigationbar from "@/Components/navigationbar.vue"
import home from "./Vue/home.vue"
import index from "./Vue/index.vue"
import pack from "./Vue/pack.vue"
import { RouterView } from "vue-router"
const currentpage = ref("home")
</script>

<style scoped>

</style>