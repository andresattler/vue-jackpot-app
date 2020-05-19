<template>
  <div>
    <p v-for="(number, index) in numbers" :key="index">{{ number }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class DrawNumbers extends Vue {
  @Prop() numbers: number[];
}
</script>
