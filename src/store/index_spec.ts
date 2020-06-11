import { mutations, State } from './index';
import { exampleDraw } from '@/fixtures/draw';
import { DrawTypes } from '@/interfaces';

describe('mutations', () => {
  it('addJackpotDraw', () => {
    const state: State = {
      jackpotDraw: undefined,
      viewedDrawType: DrawTypes.eurojackpot
    };
    mutations.addJackpotDraw(state, exampleDraw);
    expect(state.jackpotDraw).toBe(exampleDraw);
  });
});
