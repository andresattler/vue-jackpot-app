<template>
  <div>
    <DrawTypeSelect />
    <div class="draw-card">
      <img alt="Vue logo" src="../assets/logo.png" />
      <JakpotDraw />
    </div>
  </div>
</template>

<script>
import JakpotDraw from '@/components/JakpotDraw.vue';
import DrawTypeSelect from '@/components/DrawTypeSelect.vue';

export default {
  name: 'Jackpot',
  components: {
    JakpotDraw,
    DrawTypeSelect
  }
};
</script>

<style lang="scss" scoped>
@import 'src/style/mixins.scss';

.draw-card {
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: var(--color-secondary);
  border-radius: 4px;
  margin: 8px;
  padding: 16px;
  @include shadow;
  @include desktopBp {
    max-width: 800px;
  }
}
</style>
