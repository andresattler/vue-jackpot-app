<template>
  <div v-if="jackpotDraw" class="draw-container">
    <h1>{{ viewedDrawType }}</h1>
    <h2>currently at: {{ jackpotAmount }} €</h2>
    <p class="info">And the numbers are:</p>
    <DrawNumbers v-bind:numbers="jackpotDraw.numbers" />
    <DrawNumbers v-bind:numbers="jackpotDraw.additionalNumbers" />
    <p class="date">From: {{ jackpotDraw.date }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import millify from 'millify';

import DrawNumbers from '@/components/DrawNumbers.vue';
import { Draw, DrawTypes } from '../interfaces';

@Component({
  components: {
    DrawNumbers
  }
})
export default class JakpotDraw extends Vue {
  @Getter jackpotDraw!: Draw;
  @Getter viewedDrawType!: DrawTypes;
  @Action getJackpotDrawData!: (type: DrawTypes) => void;
  get jackpotAmount() {
    return millify(this.jackpotDraw.jackpot, {
      units: ['', '', ' Mio', 'Billion', 'Trillion']
    });
  }
  @Watch('viewedDrawType', { immediate: true })
  onViewedDrawTypeChange(viewedDrawType: DrawTypes) {
    this.getJackpotDrawData(viewedDrawType);
  }
}
</script>

<style scoped lang="scss">
.draw-container {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.info {
  font-size: 16px;
}
.date {
  font-size: 12px;
  font-style: italic;
}
h1,
h2 {
  font-weight: bold;
  margin-bottom: 4px;
}
h1 {
  font-size: 36px;
  text-transform: capitalize;
}
h2 {
  font-size: 20px;
}
</style>
