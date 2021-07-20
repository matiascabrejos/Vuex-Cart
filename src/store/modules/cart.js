export default {
    namespaced: true,
      state () {
          return {
              items: [],
              total: 0,
              qty: 0,
              price: 0, 
          }
      },
      mutations: {
          addProductToCart(state, payload) {
              const productData = payload;
              const productInCartIndex = state.items.findIndex(
                (ci) => ci.productId === productData.id
              );
        
              if (productInCartIndex >= 0) {
                state.items[productInCartIndex].qty++;
              } else {
                const newItem = {
                  productId: productData.id,
                  title: productData.title,
                  image: productData.image,
                  price: productData.price,
                  qty: 1,
                };
                state.items.push(newItem);
              }
              state.prodQty = state.qty;
              state.qty++;
              state.total += productData.price;
              state.price += productData.price;
            },
        
            removeProductFromCart(state, payload) {
                const prodId = payload.productId;
              const productInCartIndex = state.items.findIndex(
                (cartItem) => cartItem.productId === prodId
              );
              const prodData = state.items[productInCartIndex];
              state.items.splice(productInCartIndex, 1);
              state.qty -= prodData.qty;
              state.total -= prodData.price * prodData.qty;
              state.price -= prodData.price * prodData.qty;
            },
      },
      actions: {
          addToCart(context, payload) {
            const prodId = payload.id;
            const products = context.rootGetters['prods/products'];
            const product = products.find(prod => prod.id === prodId)
            context.commit('addProductToCart', product);
          },
          removeFromCart(context, payload) {
            context.commit('removeProductFromCart', payload);
          }
      },
      getters: {
          products(state) {
            return state.items;
          },
          totalSum(state) {
              return state.total;
          },
          quantity(state) {
              return state.qty;
          },
          price(state) {
            return state.price;
          },
          prodQty(state) {
            return state.prodQty;
          }
      }
  }