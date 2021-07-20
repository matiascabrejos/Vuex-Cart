<template>
  <li class="product">
    <div class="product__data">
      <div class="product__image">
        <img :src="image" :alt="title" />
      </div>
      <div class="product__text">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <base-card mode="highlight" :no-margin-left="true">
          <h4>${{ price }}</h4>
        </base-card>
      </div>
    </div>
    <div class="product__actions">
      <button @click="addToCart">Add to Cart</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'image', 'title', 'price', 'description'],
  methods: {
    addToCart() {
      this.$store.dispatch('cart/addToCart', {
        id: this.id
      });
    },
  },
};
</script>

<style scoped>
li {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

.product__data {
  display: flex;
}

.product__image {
  margin-right: 1rem;
}

.product__image img {
  height: 80%;
  width: 80%;
  object-fit: cover;
}

.product__text h4 {
  margin: 0;
}

.product__text {
  text-align: center;
}

.product__actions {
  text-align: center;
}

button {
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

button:hover,
button:active {
  background-color: #212121;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  outline: 0;
}

</style>