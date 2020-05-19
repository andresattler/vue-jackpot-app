import Vue from "vue";
import Vuex, { MutationTree, ActionTree, GetterTree } from "vuex";

import { fetchDraws } from "@/api/client";
import { Draw } from '@/interfaces';

Vue.use(Vuex);

interface State {
  jackpotDraw: Draw;
}

const state: State = {
  jackpotDraw: {
    date: "",
    jackpot: 0,
    numbers: []
  }
};

const mutations: MutationTree<State> = {
  addJackpotDraw: (state, jackpotDraw: Draw) => {
    state.jackpotDraw = jackpotDraw;
  }
};

const actions: ActionTree<State, any> = {
  getJackpotDrawData: async context => {
    const data = await fetchDraws();
    // TODO how can the committed mutations be typed to match the mutation types
    context.commit("addJackpotDraw", data[0]);
  }
};

const getters: GetterTree<State, any> = {
  jackpotDraw: ({ jackpotDraw }) => jackpotDraw, 
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
