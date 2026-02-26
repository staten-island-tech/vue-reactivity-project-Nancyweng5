<template>
  <div>
    <Navigationbar :page="currentpage" />
    <Home v-if="currentpage === 'home'" />
    <Pack v-if="currentpage === 'pack'" />
    <Index v-if="currentpage === 'index'" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import Navigationbar from "@/Components/navigationbar.vue"
import Home from "@/Components/home.vue"
import Pack from "@/Components/pack.vue"
import Index from "@/Components/index.vue"
const currentpage = ref("home")
</script>

<style scoped>

</style>