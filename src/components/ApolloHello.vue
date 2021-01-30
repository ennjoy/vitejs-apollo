<template>
</template>

<script setup>
import apolloClient from '../apollo/client.js'
import { EXCHANGE_RATES } from '../graphql'

const { data: { rates } } = await apolloClient.query({
  query: EXCHANGE_RATES
})

console.log(rates)
</script>