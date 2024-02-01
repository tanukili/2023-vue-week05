# 2023-vue-week5

## 指令

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## 環境建立過程

### First Commit

- npm create vue@latest
- package.json 新增 deploy 指令
- 安裝 gh-pages 套件（使用`npm run deploy`完成 pages 部屬）
- 更改路由編譯模式
- 設置環境變數

### 補齊 First Commit

- 設定編譯路徑 base

### 安裝基本套件 Commit

- axios、vue-axios
- sass
- bootstrap（在 assets 中 all.scss 匯入）
- dotenv（在 vite.config.js 匯入）

  以下參考[如何替 Vue Vite 專案加上 ESLint？](https://israynotarray.com/vue/20221002/584344963/#%E5%AE%89%E8%A3%9D-ESLint-Airbnb)

- eslint-config-airbnb-base（Airbnb 規範）
- eslint-import-resolver-alias
- eslint-plugin-import
- vite-plugin-eslint

#### 備註

- 沒有使用 bootstrap-icons，所以沒安裝。
- 參考範例模板，新增儲存庫名稱的環境變數。
- dotenv 使用在`vite.config.js`，訪問環境變數。
- eslint-plugin-promise 與 eslint-plugin-n 沒有安裝。
- 更新 VScode 的 ESLint mod 版本後才正常顯示。

### 安裝額外套件 Commit

- 表單驗證：vee-validate、@vee-validate/rules、@vee-validate/i18n
- vue-loading-overlay

#### 備註

- 安裝 eslint-config-prettier，解決衝突問題
