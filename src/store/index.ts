import Vue from "vue";
import Vuex, { MutationTree, ActionTree, GetterTree } from "vuex";

import { fetchDraws } from "@/api/client";
import { Draw } from "@/interfaces";

Vue.use(Vuex);

export interface State {
  jackpotDraw: Draw | undefined;
}

const state: State = {
  jackpotDraw: undefined
};

export const mutations: MutationTree<State> = {
  addJackpotDraw: (state, jackpotDraw: Draw) => {
    state.jackpotDraw = jackpotDraw;
  }
};

const actions: ActionTree<State, unknown> = {
  getJackpotDrawData: async context => {
    const data = await fetchDraws();
    // TODO how can the committed mutations be typed to match the actual mutation types
    context.commit("addJackpotDraw", data[0]);
  }
};

const getters: GetterTree<State, unknown> = {
  jackpotDraw: ({ jackpotDraw }) => jackpotDraw
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
