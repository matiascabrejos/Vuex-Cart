<template>
  <nav-panel></nav-panel>
  <router-view></router-view>
</template>

<script>
import NavPanel from './components/nav/NavPanel.vue';

export default {
  components: {
    NavPanel
  },
  provide() {
    return {
      isLoggedIn: this.isLoggedIn,
      cart: this.cart,
      addProductToCart: this.addProductToCart,
      removeProductFromCart: this.removeProductFromCart,
      login: this.login,
      logout: this.logout,
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>