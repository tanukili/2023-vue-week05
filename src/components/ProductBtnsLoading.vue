<script>
import { mapState } from 'pinia';
import productStore from '../stores/productStore';

export default {
  props: ['activedBtn'],
  computed: {
    ...mapState(productStore, ['isLoading']),
  },
};
</script>

<template>
  <teleport :to="`#showDetailBtn${activedBtn}`">
    <span class="spinner-border spinner-border-sm" role="status"></span>
  </teleport>
  <teleport :to="`#addToCartBtn${activedBtn}`">
    <span class="spinner-border spinner-border-sm" role="status"></span>
  </teleport>
</template>

<style></style>
