<template>

</template>

<script setup>
import { gql } from '@apollo/client/core'
import apolloClient from '../apollo/client.js'

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

const data = apolloClient.query({
  query: EXCHANGE_RATES
})

.then(data => console.log(data))
</script>