<template>
    <div class = "pulledcards">
        <Carddisplaye v-for="card in cards" :key="card.name" :card="card"/>
    </div>
</template>

<script setup>
import { cards } from '@/pulledcards.js'
import Carddisplaye from './carddisplaye.vue'
</script>

<style scoped>
.pulledcards {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
}
</style>