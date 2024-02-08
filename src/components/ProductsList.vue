<script>
import { mapState, mapActions } from 'pinia';
import productStore from '../stores/productStore';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(productStore, ['getAllProducrs', 'getSingleProduct']),
  },
  computed: {
    ...mapState(productStore, ['products', 'singleProduct', 'isOnSale', 'isOnSaleArr']),
  },
  mounted() {
    this.getAllProducrs();
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
            <button
              type="button"
              class="btn btn-outline-info btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#productModal"
              @click="getSingleProduct(product.id)"
            >
              產品資訊
            </button>
          </td>
          <td class="text-end">
            <p
              class="mb-0"
              :class="{
                'text-secondary': isOnSaleArr[index],
                'text-decoration-line-through': isOnSaleArr[index],
                small: isOnSaleArr[index],
              }"
            >
              定價 {{ product.origin_price }} 元
            </p>
            <p class="mb-0" v-if="isOnSaleArr[index]">
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
  <!-- 單一產品 modal -->
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header py-2 bg-info bg-opacity-50">
          <h5 class="modal-title fw-bold">{{ singleProduct.title }}</h5>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col">
                <img
                  :src="singleProduct.imageUrl"
                  :alt="singleProduct.title"
                  class="img-fluid w-100"
                  style="height: 240px"
                />
              </div>
              <div class="col d-flex flex-column py-2">
                <span class="badge rounded-pill bg-primary align-self-start">{{
                  singleProduct.category
                }}</span>
                <p class="mt-3">{{ singleProduct.description }}</p>
                <p>{{ singleProduct.content }}</p>
                <div class="text-end mt-auto">
                  <p
                    class="mb-1"
                    :class="{
                      'text-secondary': isOnSale,
                      'text-decoration-line-through': isOnSale,
                      small: isOnSale,
                    }"
                  >
                    定價 {{ singleProduct.origin_price }} 元
                  </p>
                  <p class="mb-0" v-if="isOnSale">
                    現在只要 <span class="text-danger fw-bold"> {{ singleProduct.price }} </span> 元
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            關閉
          </button>
          <div class="input-group" style="width: 40%">
            <input
              type="number"
              min="0"
              class="form-control"
              :value="singleProduct.qty ? singleProduct.qty : '0'"
            />
            <button class="btn btn-primary" type="button">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// img {
//   object-fit: cover;
// }
</style>
