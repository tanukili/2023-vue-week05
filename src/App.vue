<script>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';

[1, 2, 3].map((x) => x * x);

export default {
  data() {
    return {
      user: {
        email: '',
      },
    };
  },
  components: {
    HelloWorld,
    RouterLink,
    RouterView,
  },
  methods: {
    submit() {
      const loader = this.$loading.show({
        // Optional parameters
      });
      // simulate AJAX
      setTimeout(() => {
        loader.hide();
      }, 5000);
    },
  },
  mounted() {
    this.submit();
  },
};
</script>

<template>
  <header>
    <!-- 取用 assets：相對路徑 @/assets/logo.svg -->

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <button type="button" class="btn btn-primary">Primary</button>
      <VForm novalidate @submit="onSubmit">
        <VField
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="請輸入 Email"
          rules="email|required"
        ></VField>
        <label for="email">信箱</label>
        <ErrorMessage name="email" v-slot="{ message }">
          <p>ERRROR: {{ message }}</p>
        </ErrorMessage>
      </VForm>
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

$primary: gray;
div {
  color: $primary;
}
</style>
