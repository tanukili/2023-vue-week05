<script>
const url = import.meta.env.VITE_API_URL;
const path = import.meta.env.VITE_API_PATH;

export default {
  data() {
    return {
      carts: [],
    };
  },
  mounted() {
    this.axios
      .get(`${url}/api/${path}/cart`)
      .then((res) => {
        console.log(res.data.data.carts);
        this.carts = res.data.data.carts;
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
  computed: {
    isOnSale() {
      return this.carts.map((cart) => cart.product.origin_price > cart.product.price);
    },
  },
};
</script>

<template>
  <div class="bg-light">
    <div class="container text-center py-4">
      <h2>我的購物車</h2>
      <p v-if="!carts" class="my-5">目前購物車沒有商品喔！</p>
      <table v-else class="table table-hover align-middle">
        <thead>
          <tr>
            <th scope="col" width="60"></th>
            <th scope="col">品名</th>
            <th scope="col">數量</th>
            <th scope="col" width="" class="text-end">單價</th>
            <th scope="col" width="100" class="text-end">小計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cart, index) in carts" :key="cart.id">
            <th scope="row">
              <button type="button" class="btn btn-outline-secondary">
                <i class="bi bi-trash3-fill"></i>
              </button>
            </th>
            <td>{{ cart.product.title }}</td>
            <td>
              <div class="d-flex justify-content-center">
                <div class="input-group" style="max-width: 120px">
                  <input type="number" class="form-control" :value="cart.qty" />
                  <span class="input-group-text">{{ cart.product.unit }}</span>
                </div>
              </div>
            </td>
            <td class="text-end">
              <p class="mb-0">
                <span v-if="isOnSale[index]" class="text-danger fw-bold">
                  <span
                    class="d-none d-md-inline-block badge rounded-pill text-bg-warning fw-normal"
                    >特價中</span
                  >
                  {{ cart.product.price }}
                </span>
                <span v-else>
                  {{ cart.product.origin_price }}
                </span>
              </p>
            </td>
            <td class="text-end">{{ cart.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
