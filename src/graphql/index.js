import { gql } from '@apollo/client/core'

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`
export {
    EXCHANGE_RATES
}