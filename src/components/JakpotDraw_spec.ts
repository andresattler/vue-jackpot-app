import { shallowMount } from '@vue/test-utils';
import { exampleDraw } from '@/fixtures/draw';
import DrawNumbers from '@/components/DrawNumbers.vue';

describe('DrawNumbers', () => {
  it('renders given Numbers', () => {
    const wrapper = shallowMount(DrawNumbers, {
      // TODO can props be props typed?
      propsData: {
        numbers: exampleDraw.numbers.length
      }
    });

    expect(wrapper.findAll('.number').length).toBe(exampleDraw.numbers.length);
  });
});
