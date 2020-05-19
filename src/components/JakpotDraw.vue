<template>
  <div>
    <p>{{ jackpotDraw.jackpot }}</p>
    <DrawNumbers v-bind:numbers="jackpotDraw.numbers" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

import DrawNumbers from "@/components/DrawNumbers.vue";
import { Draw } from '../interfaces';

@Component({
  components: {
    DrawNumbers
  }
})
export default class JakpotDraw extends Vue {
  @Getter jackpotDraw: Draw;
  @Action getJackpotDrawData: () => void;
  created() {
    this.getJackpotDrawData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
