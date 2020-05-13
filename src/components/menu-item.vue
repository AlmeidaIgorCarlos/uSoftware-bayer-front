<template>
  <li class="pointer">
    <img
      :style="{width: `${this.imageWidth}px`}"
      :src="this.imageLocation"
    />
    <p>{{this.text}}</p>
  </li>
</template>

<script>
export default {
  props: {
    imageLocation: String,
    imageWidth: String,
    text: String
  }
};
</script>

<style lang="scss" scoped>
li {
  display: flex;
  justify-content: start;
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
}

.pointer {
  cursor: pointer;
  outline: none;
}
</style>