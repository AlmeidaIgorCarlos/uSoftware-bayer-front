<template>
  <input v-if="click" :type="type" :value="value" :placeholder="placeholderValue" @click="click"/>
  <input v-else-if="keyup" :type="type" :value="value" :placeholder="placeholderValue" @keyup="keyup"/>
  <input v-else :type="type" :value="value" :placeholder="placeholderValue" />
</template>

<script>  
export default {
  props: {
    placeholderValue: String,
    type: String,
    value: String,
    click: Function,
    keyup: Function
  }
};
</script>

<style lang="scss" scoped>
input {
  --form-item-background-color: black;
  --form-item-fore-color: #b3b3b3;

  border-style: none;
  outline: none;

  border-bottom: 1px solid var(--form-item-fore-color);
  background-color: black;
  color: white;

  width: 97%;

  padding: 0;
  margin: 0;

  padding-bottom: 7px;
  padding-left: 10px;
  text-align: left;

  font-family: arial;
  font-size: 1em;

  display: block;
}
</style>