<script>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';

[1, 2, 3].map((x) => x * x);

export default {
  components: {
    HelloWorld,
    RouterLink,
    RouterView,
  },
  mounted() {
    console.dir(this.axios);
  },
};
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <button type="button" class="btn btn-primary">Primary</button>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
@import './assets/all.scss';

$primary: red;
div {
  color: $primary;
}
</style>
