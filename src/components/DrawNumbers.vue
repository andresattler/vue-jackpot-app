<template>
  <div class="numbers-container">
    <div class="number" v-for="(number, index) in numbers" :key="index">
      <p>{{ number }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DrawNumbers extends Vue {
  @Prop() numbers!: number[];
}
</script>

<style scoped lang="scss">
@import 'src/style/mixins.scss';
$number-size: 50px;

.numbers-container {
  display: flex;
  justify-content: center;
  margin: 8px 0;
}
.number {
  color: var(--font-color-primary);
  background-color: var(--color-primary);
  width: $number-size;
  height: $number-size;
  border-radius: 50%;
  @include shadow;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
}
</style>
