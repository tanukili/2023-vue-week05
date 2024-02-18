<script>
import OrderForm from '../components/OrderForm.vue';
import CartsList from '../components/CartsList.vue';
import ProductsList from '../components/ProductsList.vue';

export default {
  components: {
    OrderForm,
    CartsList,
    ProductsList,
  },
  mounted() {
    const loader = this.$loading.show({
      container: this.fullPage,
    });
    setTimeout(() => {
      loader.hide();
    }, 1000);
  },
};
</script>

<template>
  <div class="vl-parent" ref="loadingContainer">
    <ProductsList></ProductsList>
    <CartsList></CartsList>
    <OrderForm></OrderForm>
  </div>
</template>

<style>
img {
  object-fit: cover;
}
</style>
