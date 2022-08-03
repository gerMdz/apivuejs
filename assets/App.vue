<template>
<!--  <Navbar />-->
  <b-container fluid>
<!--    <Home/>-->
    <Navbar />
    <router-view>
    </router-view>

  </b-container>
</template>

<script>

import Home from "./views/Home";
import Link from "./router";
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    // Home,
    // Link,
    Navbar
  }
}
</script>

<style scoped>

</style>