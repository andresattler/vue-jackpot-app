<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/jackpot">Jackpot</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import 'src/style/mixins.scss';
@import 'reset-css';

$header-height: 35px;

:root {
  --background-color: #393e46;
  --font-color-primary: #eeeeee;
  --color-primary: #4ecca3;
  --color-secondary: #232931;
}

body {
  background-color: var(--background-color);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--font-color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  @include desktopBp {
    margin-top: $header-height;
  }
}

#nav {
  background-color: var(--color-secondary);
  padding: 8px;
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
  height: $header-height;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  @include desktopBp {
    bottom: initial;
    top: 0;
    justify-content: initial;
  }
  a {
    font-weight: bold;
    color: var(--color-primary);
    margin-right: 6px;

    &.router-link-exact-active {
      color: var(--font-color-primary);
    }
  }
}
</style>
