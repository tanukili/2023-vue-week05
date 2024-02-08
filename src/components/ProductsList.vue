<script>
const url = import.meta.env.VITE_API_URL;
const path = import.meta.env.VITE_API_PATH;

export default {
  data() {
    return {
      products: [],
    };
  },
  computed: {
    isOnSale() {
      return this.products.map((product) => product.origin_price > product.price);
    },
  },
  mounted() {
    this.axios.get(`${url}/api/${path}/products/all`).then((res) => {
      this.products = res.data.products;
    });
  },
};
</script>

<template>
  <div class="container">
    <table class="table text-center">
      <thead>
        <tr>
          <th scope="col">產品預覽</th>
          <th scope="col">產品名稱</th>
          <th scope="col" class="text-end">價格</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.id" class="align-middle">
          <th scope="row">
            <img
              :src="product.imageUrl"
              :alt="product.title"
              style="height: 70px; width: 100px"
              class="img-fluid"
            />
          </th>
          <td>
            <h3 class="fs-6">{{ product.title }}</h3>
            <button type="button" class="btn btn-outline-info btn-sm">產品資訊</button>
          </td>
          <td class="text-end">
            <p
              class="mb-0"
              :class="{
                'text-secondary': isOnSale[index],
                'text-decoration-line-through': isOnSale[index],
                small: isOnSale[index],
              }"
            >
              定價 {{ product.origin_price }} 元
            </p>
            <p class="mb-0" v-if="isOnSale[index]">
              現在只要 <span class="text-danger fw-bold"> {{ product.price }} </span> 元
            </p>
          </td>
          <td>
            <button type="button" class="btn btn-primary btn-sm">加入購物車</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss"></style>
