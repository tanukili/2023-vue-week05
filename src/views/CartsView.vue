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
};
</script>

<template>
  <ProductsList></ProductsList>
  <CartsList></CartsList>
  <OrderForm></OrderForm>
</template>

<style>
img {
  object-fit: cover;
}
</style>
