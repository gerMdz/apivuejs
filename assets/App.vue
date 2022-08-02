<template>
  <div class="container">
    <Home/>
    <router-view/>
    <h4>Home</h4>
  </div>
</template>

<script>

import Home from "./views/Home";
import Link from "./router";

export default {
  name: "App",
  components: {
    Home,
    Link
  }
}
</script>

<style scoped>

</style>