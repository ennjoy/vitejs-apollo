<template>
  <img alt="Stack logo" src="./assets/logo.png" />
  <HelloWorld msg="My first app with " />
  <ApolloHello />
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import ApolloHello from './components/ApolloHello.vue'
</script>

<style lang="scss">
@import './assets/scss/main';
</style>