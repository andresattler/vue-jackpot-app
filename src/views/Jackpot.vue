<template>
  <div class="draw-card">
    <img alt="Vue logo" src="../assets/logo.png" />
    <JakpotDraw />
  </div>
</template>

<script>
import JakpotDraw from "@/components/JakpotDraw.vue";

export default {
  name: "Jackpot",
  components: {
    JakpotDraw
  }
};
</script>

<style lang="scss" scoped>
@import "src/style/mixins.scss";

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
    width: 60%;
    max-width: 800px;
  }
}
</style>
