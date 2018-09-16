const state = {
  imgLogo: require('@/assets/images/vue-logo.png'),
  pageLoading: true,
  menuDisplay: true,
  menuMini: false
};

// Mutations são operações que mudam o estado dos objetos.
const mutations = {
  pageLoadingShowMutation(state) {
    state.pageLoading = true;
  },
  pageLoadingHideMutation(state) {
    state.pageLoading = false;
  },
  pageLoadingSetMutation(state, value) {
    state.pageLoading = value;
  },
  menuDisplaySetMutation(state, value) {
    state.menuDisplay = value;
  },
  menuMiniSetMutation(state, value) {
    state.menuMini = value;
  }
};

// Actions são funções que causam efeitos sendo operações assíncronas.
const actions = {
  layoutPageLoadingShowAction: ({ commit }) =>
    commit("pageLoadingShowMutation"),
  layoutPageLoadingHideAction: ({ commit }) =>
    commit("pageLoadingHideMutation"),
  layoutPageLoadingSetAction({ commit }, value) {
    commit("pageLoadingSetMutation", value);
  },
  menuDisplaySetAction({ commit }, value) {
    commit("menuDisplaySetMutation", value);
  },
  layoutMenuMiniSetAction({ commit }, value) {
    commit("menuMiniSetMutation", value);
  }
};

// Getters são funções
const getters = {
  imgLogoGetter: state => state.imgLogo,
  pageLoadingGetter: state => state.pageLoading,
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
