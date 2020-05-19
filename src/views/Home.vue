<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <JakpotDraw />
  </div>
</template>

<script>
import JakpotDraw from "@/components/JakpotDraw.vue";

export default {
  name: "Home",
  components: {
    JakpotDraw
  }
};
</script>
