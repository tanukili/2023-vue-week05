<script>
export default {
  methods: {
    submit() {
      const loader = this.$loading.show({
        // Optional parameters
      });
      // simulate AJAX
      setTimeout(() => {
        loader.hide();
      }, 1000);
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
  </header>
  <RouterView />
</template>

<style lang="scss">
</style>
