import { mutations, State } from './index';
import { exampleDraw } from '@/fixtures/draw';

describe('mutations', () => {
  it('addJackpotDraw', () => {
    const state: State = {
      jackpotDraw: undefined
    };
    mutations.addJackpotDraw(state, exampleDraw);
    expect(state.jackpotDraw).toBe(exampleDraw);
  });
});
