<template>
  <div>
    <b-navbar type="light" variant="light">
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="/login">Login</b-dropdown-item>
          <b-dropdown-item href="/register">Register</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>