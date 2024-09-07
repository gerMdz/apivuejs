<template>
  <b-container fluid>
    <Navbar />
<!--    <router-view />-->
  </b-container>
</template>

<script>
import Navbar from "./components/Navbar";

console.log('11')

export default {
  name: "App",
  components: {
    Navbar
  }
}
</script>

<style scoped>
</style>