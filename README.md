# vue-core
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Node version
`12.x` 或以上。

### 專案目的
此專案為 Vue 2.x 版本的核心專案，安裝了一些基本套件，以方便未來開發 Vue 專案時使用。

### 已安裝套件
* [vue-axios](https://github.com/imcvampire/vue-axios)
* [vue-loading-overlay](https://github.com/ankurk91/vue-loading-overlay/tree/v3.x)

### UI 套件
本專案尚未安裝 ui 套件，可以按照開發需求安裝，這邊推薦兩個 ui 套件：
1. [Bootstrap](https://bootstrap-vue.org/)
2. [Vuetify](https://vuetifyjs.com/en/)

### 套件提醒
開發中若需要尋找套件，請優先尋找專為 Vue 開發的套件，避免發生相容問題。

### vuex
本專案利用 vuex 做 state 管理。
規則為利用 module 的方式來區分各種 state 與其操作。
已經在 `/src/store` 資料夾中先建立了 `global` 與 `api` 的範例 module，未來可按照此規則做管理。

### 環境變數
本專案利用 `.env.development` 跟 `.env.production` 去管理開發版本與發佈版本的環境變數。
環境變數命名規則一律帶有 `VUE_APP` 作為前綴，開發時利用 `process.env.VUE_APP_XXX` 做引入即可。