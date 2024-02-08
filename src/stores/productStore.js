import { defineStore } from 'pinia';
import axios from 'axios';

const url = import.meta.env.VITE_API_URL;
const path = import.meta.env.VITE_API_PATH;

export default defineStore('productsStore', {
  state: () => ({
    products: [],
    singleProduct: {},
  }),
  getters: {
    isOnSale() {
      return this.singleProduct.origin_price > this.singleProduct.price;
    },
    isOnSaleArr() {
      return this.products.map((product) => product.origin_price > product.price);
    },
  },
  actions: {
    getAllProducrs() {
      axios
        .get(`${url}/api/${path}/products/all`)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          alert(`無法取得商品資料：${err.response.data.message}`);
        });
    },
    getSingleProduct(id) {
      axios
        .get(`${url}/api/${path}/product/${id}`)
        .then((res) => {
          this.singleProduct = res.data.product;
        })
        .catch((err) => {
          alert(`無法取得該商品資料：${err.response.data.message}`);
        });
    },
  },
});
