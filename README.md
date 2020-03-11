# vue核心
## 專案目的
此專案為整理後的底層 Vue Cli，因為開發關係，整理了一個底層，方便以後開發直接取用，避免再重複創建新的 Cli。

## 使用套件
* [vue-axios](https://www.npmjs.com/package/vue-axios)
* [Bootstrap](https://getbootstrap.com/)
* [jQuery](https://jquery.com/)
* [vue-loading-overlay](https://www.npmjs.com/package/vue-loading-overlay)
* [vee-validate](https://logaretm.github.io/vee-validate/)
* [font-awesome](https://fontawesome.com/)

所有套件皆已 import 可直接使用。
loading-overlay 部分直接註冊在全局，透過 vuex 管理，要使用的話可以參考下面程式碼。
```js
this.$store.dispatch('updateLoading', true) // 觸發 loading 效果
this.$store.dispatch('updateLoading', false) // 解除 loading 效果
```
vee-validate 是表單驗證的工具，使用方法可參考此[文章](https://hao1229.github.io/2019/08/09/EcommercePractice8/)