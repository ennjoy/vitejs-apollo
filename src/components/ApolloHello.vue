<script setup>
import { ref, onMounted } from 'vue'
import apolloClient from '../apollo/client.js'
import { EXCHANGE_RATES } from '../graphql'

const response = ref([])

onMounted(async () => {
  const { data: { rates } } = await apolloClient.query({
    query: EXCHANGE_RATES
  })

  response.value = rates
})

// console.log(rates)
</script>

<template>
  <div class="response">
    <code>{{ response }}</code>
  </div>
</template>
