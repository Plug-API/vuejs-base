const state = {
  menuDisplay: true,
  menuMini: false
};

// Mutations são operações que mudam o estado dos objetos.
const mutations = {
  menuDisplaySetMutation(state, value) {
    state.menuDisplay = value;
  },
  menuMiniSetMutation(state, value) {
    state.menuMini = value;
  }
};

// Actions são funções que causam efeitos sendo operações assíncronas.
const actions = {
  menuDisplaySetAction({ commit }, value) {
    commit("menuDisplaySetMutation", value);
  },
  layoutMenuMiniSetAction({ commit }, value) {
    commit("menuMiniSetMutation", value);
  }
};

// Getters são funções
const getters = {
  menuDisplayGetter: state => state.menuDisplay,
  menuMiniGetter: state => state.menuMini,
};

// Módulo para criação da instância Vuex combinando o state, mutations, actions e getters
export default {
  state,
  getters,
  actions,
  mutations
};
