<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="css">
:root{
  --default-grey-color: rgba($color: #d9d9d9, $alpha: 1);
}

body {
  margin: 0px !important;
  padding: 0px !important;
  background-color: white;
}

*{
  font-size: 14px;
  font-family: sans-serif;
  text-transform: uppercase;
}

.pointer{
  cursor: pointer;
  outline: none;
}
</style>