<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
    msg: String
})

const words = reactive([
    {
        word: 'Apollo',
        class: 'blue'
    },
    {
        word: 'Vuejs',
        class: 'green'
    },
    {
        word: 'Vitejs',
        class: 'orange'
    }
])
</script>

<template>
  <div class="welcome">
    <span>{{ msg }}</span>
    <span class="words">
        <ul>
            <li v-for="(word, index) in words" :key="index" :class="word.class">{{ word.word }}</li>
        </ul>
    </span> 
  </div>
</template>
