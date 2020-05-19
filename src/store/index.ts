import Vue from "vue";
import Vuex from "vuex";
import { fetchDraws } from '@/api/client';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jackpot: {
      date: '',
      value: undefined,
      numbers: [],
    }
  },
  mutations: {
    // setJackpot: () => {
    // }
  },
  actions: {
    // getJackpotData: () => {
    //   fetchDraws().then((data) => {
    //   })
    // }
  },
  modules: {}
});
