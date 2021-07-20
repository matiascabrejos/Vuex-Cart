<template>
  <header>
    <h1>
      <router-link to="/">Ducky Shop</router-link>
    </h1>
    <nav>
      <ul>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>
          <router-link to="/cart">Cart</router-link>
          <base-card mode="elegant">{{ cartQuantity }}</base-card>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/admin">Admin</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <button> {{ testing }} </button>
      <button> {{ cartQuantity }} </button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    cartQuantity() {
      return this.$store.getters['cart/quantity'];
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    testing() {
      return this.$store.getters['cart/price'];
    },
    prodQty() {
      return this.$store.getters['cart/prodQty']
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    }, 
  }
};
</script>

<style scoped>
header {
  height: 5rem;
  background-color: white;
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a {
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: #fff;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: .1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background: #424242;
  border-radius: 4px;
  border: 1px solid #bbb;
  cursor: pointer;
  box-sizing: border-box;
}

a:hover,
a:active,
a.router-link-active {
  background-color: #212121;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  outline: 0;
}

button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 1px solid #212121;
  background-color: transparent;
  color: #333;;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #212121;
  color: #fff;
}
</style>