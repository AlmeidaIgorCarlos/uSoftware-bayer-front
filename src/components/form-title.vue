<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
h1 {
  --form-item-fore-color: #b3b3b3;
  text-align: center;
  color: var(--form-item-fore-color);
  font-family: sans-serif;
  font-size: 1.4em
}
</style>