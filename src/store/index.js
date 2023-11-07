import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    localProducts: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [],
  },
  mutations: {
    setProduct(state, { nombre, castigos, parametros }) {
      const productsArray = state.localProducts;
      const generateId = () => Math.random().toString(36).substr(2, 9);
      productsArray.push({ id: generateId(), nombre, castigos, parametros });
      localStorage.setItem('products', JSON.stringify(productsArray));
    },
  },
  actions: {
    updateProduct({ commit }, { nombre, castigos, parametros }) {
      commit('setProduct', { nombre, castigos, parametros });
    }
  },

  getters: {
    deleteProduct: (state) => (id) => {
      state.localProducts = state.localProducts.filter(product => product.id !== id);
      localStorage.setItem('products', JSON.stringify(state.localProducts));
    },
    getProducts: (state) => () => {
      return state.localProducts || 0; // Valor predeterminado si no existe
    },
  },
});