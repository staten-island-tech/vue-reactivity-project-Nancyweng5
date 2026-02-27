<template>
  <div>
    <Navigationbar :page="currentpage" />
    <home v-if="currentpage === 'home'" />
    <pack v-if="currentpage === 'pack'" />
    <index v-if="currentpage === 'index'" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import Navigationbar from "@/Components/navigationbar.vue"
import home from "./Vue/home.vue"
import index from "./Vue/index.vue"
import pack from "./Vue/pack.vue"
const currentpage = ref("home")
</script>

<style scoped>

</style>