<template>
  <li
    class="pointer"
    ref="menuItem"
    @click="setStatus"
    :style="{'background-color': this.backgroundColor}"
  >
    <img :style="{width: `${this.imageWidth}px`}" :src="this.imageLocation" />
    <p>{{this.text}}</p>
  </li>
</template>

<script>
export default {
  props: {
    imageLocation: String,
    imageWidth: String,
    text: String,
    backgroundColor: String
  },
  methods: {
    setStatus() {
      const menuItemDOM = this.$refs.menuItem;
      this.$emit("setStatus", menuItemDOM);
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  display: flex;
  justify-content: start;
  padding-left: 20px;
}

li:not(:first-of-type) {
  margin-top: 25px;
}

p {
  margin-left: 20px;
  padding-top: 5px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  font-family: sans-serif;
}

.pointer {
  cursor: pointer;
  outline: none;
}
</style>