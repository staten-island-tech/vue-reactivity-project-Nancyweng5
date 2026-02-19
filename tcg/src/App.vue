<template>
  <div>

  </div>
</template>

<script setup>
import {ref} from "vue"
import navigationbar from "./Components/navigationbar.vue";
import home from "./Vue/home.vue";
import pack from "./Vue/pack.vue";
import index from "./Vue/index.vue";
const currentpage = ref("home")
const collection = ref([])
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  background: #111;
  color: #FCF6F5;
  font-family: Arial;
}
</style>