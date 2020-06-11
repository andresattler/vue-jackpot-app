<template>
  <div class="select-container">
    <select @change="onSelect" :value="viewedDrawType">
      <option v-for="drawType in drawTypes" :value="drawType" :key="drawType">{{
        drawType
      }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import { DrawTypes } from '@/interfaces';

type ChangeEvent<T extends string> = {
  target: {
    value: T;
  };
};

@Component
export default class DrawTypeSelect extends Vue {
  @Getter viewedDrawType!: DrawTypes;
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
