<template>
    <div>
        <h2>Your cards</h2>
        <div class = "index"></div>
        <Carddisplaye v-for = "card in pack" :key="card.name" :card = "card"/>
    </div>
</template>

<script setup>
import Carddisplaye from '@/Components/carddisplaye.vue';



</script>

<style  scoped>

</style>