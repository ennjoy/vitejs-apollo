# Apollo and Vuejs for Vitejs

<p align="center">
  <img src="https://hsto.org/webt/60/14/56/601456d15afd1062653689.png">
  <br>
</p>

<br>

**Background**

Hey! For me, it was necessary to use apollo-client with Vite 2. And while there are no clean libraries that will work only with Vuejs, then we will manage with what we have. The Apollo team wrote a client only for react and therefore we have to mess things up from: ```@apollo/client/core```

<br>

# Start 🚀

First, we need to install the ```@apollo/client``` package. This can be done with the command below:

```npm i -S @apollo/client // OR yarn add @apollo/client```

<br>

Then I started setting up the configuration to work with the backend.
```
// src/apollo/client.js

import { ApolloClient, HttpLink } from '@apollo/client/core'
import { InMemoryCache } from '@apollo/client/cache'

const httpLink = new HttpLink({
  uri: 'http://127.0.0.1:4000/graphql'
})

const apolloClient = new ApolloClient({
  link: httpLink, 
  cache: new InMemoryCache()
})

export default apolloClient
```
<br>

We can now import apollo.js into the Vuejs component
```
// src/components/ApolloHello.vue

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
```

<br>

You also need to make changes to ```vite.config.js```
```
{
    ...
    optimizeDeps: {
        include: [
            '@apollo/client/core',
            '@apollo/client/cache'
        ]
    },
    rollupInputOptions: {
        external: ['react']
    }
    ...
}
```

<br>

# What's next? 🚀
We can now use ```@apollo/client``` along with Vuejs. To try this stack, you can **clone the repository**.
