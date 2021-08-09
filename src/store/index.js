import Vue from "vue";
import Vuex from "vuex";
import Service from "@/services";

Vue.use(Vuex);

const mutationTypes = {
  SET_MERCHANTS: "setMerchants",
  SET_QUERYSTRING: "setQueryString",
  ADD_FAV_MERCHANT: "addFavMerchant",
  REMOVE_FAV_MERCHANT: "removeFavMerchant",
};

export default new Vuex.Store({
  state: {
    merchants: null,
    favMerchants: [],
    queryString: '',
  },
  getters: {
    merchants: (state) => state.merchants,  
    favMerchants: (state) => state.favMerchants,  
    queryString: (state) => state.queryString,
  },
  mutations: {
    [mutationTypes.SET_MERCHANTS](state, merchants) {
      state.merchants = merchants;
    },
    [mutationTypes.ADD_FAV_MERCHANT](state, favMerchant) {
      state.favMerchants.push(favMerchant);
    },
    [mutationTypes.REMOVE_FAV_MERCHANT](state, favMerchant) {
      state.favMerchants = state.favMerchants.filter(mer => mer.id !== favMerchant.id);
    },
    [mutationTypes.SET_QUERYSTRING](state, queryString) {
      state.queryString = queryString;
    },
  },
  actions: {
    async getMerchants({ commit, state }) {
      const merchants = await Service.getMerchants(state.queryString);
      commit(mutationTypes.SET_MERCHANTS, merchants);
    },
    addFavMerchant({ commit }, merchant) {
      commit(mutationTypes.ADD_FAV_MERCHANT, merchant);
    },
    removeFavMerchant({ commit }, merchant) {
      commit(mutationTypes.REMOVE_FAV_MERCHANT, merchant);
    },
  },
});