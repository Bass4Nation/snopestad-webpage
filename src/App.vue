<script setup>
import { RouterLink, RouterView } from "vue-router";
import SnopestadHeader from "./components/SnopestadHeader.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <header>
    <img alt="Snopestad logo" class="logo" src="@/assets/Snopestad-logo.png" />

    <div class="wrapper">
      <SnopestadHeader msg="Snopestad" />

      <nav>
        <RouterLink to="/">Hjem</RouterLink>
        <RouterLink to="/about">Om oss her
        </RouterLink>
        <RouterLink to="/equipments">Traktorer og redskaper</RouterLink>
        <RouterLink to="/history">Historie</RouterLink>
      </nav>
    </div>
  </header>
  <section class="mainView">
    <RouterView />
  </section>
  <!-- <RouterView /> -->
  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-bottom: black solid 3px;
  padding-bottom: 10px;

}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
    height: 300px;
  }

  .mainView {
    margin-top: 100px;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
