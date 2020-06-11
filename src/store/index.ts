import Vue from 'vue';
import Vuex, { MutationTree, ActionTree, GetterTree } from 'vuex';

import { fetchDraws } from '@/api/client';
import { Draw, DrawTypes } from '@/interfaces';

Vue.use(Vuex);

export interface State {
  jackpotDraw: Draw | undefined;
  viewedDrawType: DrawTypes;
}

const state: State = {
  jackpotDraw: undefined,
  viewedDrawType: DrawTypes.eurojackpot
};

export const mutations: MutationTree<State> = {
  addJackpotDraw: (state, jackpotDraw: Draw) => {
    state.jackpotDraw = jackpotDraw;
  },
  setViewedDrawType: (state, type: DrawTypes) => {
    state.viewedDrawType = type;
  }
};

const actions: ActionTree<State, unknown> = {
  getJackpotDrawData: async (context, type: DrawTypes) => {
    const data = await fetchDraws(type);
    // TODO how can the committed mutations be typed to match the actual mutation types
    context.commit('addJackpotDraw', data[0]);
  }
};

const getters: GetterTree<State, unknown> = {
  jackpotDraw: ({ jackpotDraw }) => jackpotDraw,
  viewedDrawType: ({ viewedDrawType }) => viewedDrawType
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
