<template>
  <div id="app" v-cloak>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
[v-cloak] {
  display: none;
}
@mixin size {
  width: 100%;
  height: 100%;
}
html {
  font-size: 14px;
  overflow: hidden;
}
html,
body {
  @include size;
  overflow: auto;
  margin: 0;
  padding: 0;
}
#app {
  @include size;
}
input[type='number'] {
  -moz-appearance: textfield;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
::-webkit-scrollbar {
  width: 4px;
  height: 2px;
}
::-webkit-scrollbar-thumb {
  /* height: 60px; */
  background-color: #101012;
  -webkit-border-radius: 10px;
  outline: #c6ced7 solid 2px;
  outline-offset: -2px;
  border: 2px solid #101012;
}
::-webkit-scrollbar-thumb {
  /* height: 60px; */
  background-color: #101012;
  -webkit-border-radius: 10px;
  outline: #101012 solid 2px;
  outline-offset: -2px;
  border: 2px solid #101012;
}
</style>
