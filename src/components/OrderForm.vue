<script>
export default {
  methods: {
    onSubmit() {
      console.log('表單送出');
    },
  },
};
</script>

<template>
  <div class="container py-5">
    <h2 class="mb-3 text-center">填寫訂單資料</h2>
    <div class="row justify-content-center">
      <div class="col-10 col-md-8 col-lg-6">
        <VForm v-slot="{ errors }" @submit="onSubmit" class="d-flex flex-column">
          <div class="mb-3">
            <span class="d-flex justify-content-between">
              <label for="email" class="form-label">信箱</label>
              <ErrorMessage name="信箱" v-slot="{ message }" class="invalid-feedback">
                <span class="small text-danger">{{ message }}</span>
              </ErrorMessage>
            </span>
            <!-- 當錯誤訊息有對應 key 時，加入 is-invalid -->
            <VField
              id="email"
              name="信箱"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['信箱'] }"
              placeholder="請輸入信箱"
              rules="email|required"
            ></VField>
          </div>
          <div class="mb-3">
            <span class="d-flex justify-content-between">
              <label for="name" class="form-label">收件人姓名</label>
              <ErrorMessage name="姓名" v-slot="{ message }" class="invalid-feedback">
                <span class="small text-danger">{{ message }}</span>
              </ErrorMessage>
            </span>
            <VField
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入收件人姓名"
              rules="required"
            ></VField>
          </div>
          <div class="mb-3">
            <span class="d-flex justify-content-between">
              <label for="phone" class="form-label">收件人電話</label>
              <ErrorMessage name="電話" v-slot="{ message }" class="invalid-feedback">
                <span class="small text-danger">{{ message }}</span>
              </ErrorMessage>
            </span>
            <VField
              id="phone"
              name="電話"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入收件人電話"
              rules="required"
            ></VField>
          </div>
          <div class="mb-3">
            <span class="d-flex justify-content-between">
              <label for="address" class="form-label">收件人地址</label>
              <ErrorMessage name="地址" v-slot="{ message }" class="invalid-feedback">
                <span class="small text-danger">{{ message }}</span>
              </ErrorMessage>
            </span>
            <VField
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入收件人地址"
              rules="required"
            ></VField>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <VField
              id="message"
              name="地址"
              as="textarea"
              class="form-control"
              style="height: 96px"
              placeholder="請輸入留言"
            ></VField>
          </div>
          <button type="submit" class="btn btn-primary w-75 align-self-center">送出訂單</button>
        </VForm>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
