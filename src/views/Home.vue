<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Vue Lottery</h1>
    <p>The new fancy Vue.js Lottery app</p>
    <router-link to="/jackpot" class="jackpot-cta"
      >Vue the the current Eurojackpot</router-link
    >
  </div>
</template>

<style lang="scss" scoped>
@import 'src/style/mixins.scss';

.home {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.jackpot-cta {
  background-color: var(--color-primary);
  color: var(--font-color-primary);
  border-radius: 4px;
  padding: 8px 16px;
  text-decoration: none;
  @include shadow;
  margin-top: 8px;
  font-weight: bold;
}

h1 {
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 4px;
}
p {
  font-size: 16px;
}
</style>
