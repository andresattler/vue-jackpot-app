<template>
  <div v-if="jackpotDraw" class="draw-container">
    <h1>Eurojackpot</h1>
    <h2>currently at: {{ jackpotAmount }} €</h2>
    <p class="info">And the numbers are:</p>
    <DrawNumbers v-bind:numbers="jackpotDraw.numbers" />
    <p class="date">From: {{ jackpotDraw.date }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import millify from 'millify';

import DrawNumbers from '@/components/DrawNumbers.vue';
import { Draw } from '../interfaces';

@Component({
  components: {
    DrawNumbers
  }
})
export default class JakpotDraw extends Vue {
  @Getter jackpotDraw!: Draw;
  @Action getJackpotDrawData!: () => void;
  get jackpotAmount() {
    return millify(this.jackpotDraw.jackpot, {
      units: ['', '', ' Mio', 'Billion', 'Trillion']
    });
  }
  created() {
    this.getJackpotDrawData();
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
h1 {
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 4px;
}
h2 {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 4px;
}
</style>
