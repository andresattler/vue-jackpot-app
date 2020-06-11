<template>
  <div class="select-container">
    <select @change="onSelect" name="" id="">
      <option v-for="drawType in drawTypes" :value="drawType" :key="drawType">{{
        drawType
      }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DrawTypes } from '@/interfaces';

type ChangeEvent<T extends string> = {
  target: {
    value: T;
  };
};

@Component
export default class DrawTypeSelect extends Vue {
  drawTypes = Object.values(DrawTypes);
  onSelect(e: ChangeEvent<DrawTypes>) {
    this.$store.commit('setViewedDrawType', e.target.value);
  }
}
</script>

<style lang="scss" scoped>
.select-container {
  margin-top: 8px;
  text-align: center;
}
</style>
