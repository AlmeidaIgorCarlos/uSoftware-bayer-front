<template>
  <li
    class="pointer"
    ref="menuItem"
    @click="setMenuItemStatus"
    :style="{'background-color': this.backgroundColor}"
  >
    <img :style="{width: this.imageWidth}" :src="this.imageLocation" />
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
    setMenuItemStatus() {
      const menuItemDOM = this.$refs.menuItem;
      this.$emit("setMenuItemStatus", menuItemDOM);
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  display: flex;
  justify-content: start;
  padding-left: 30px;
}

li:not(:first-of-type) {
  margin-top: 25px;
}

p {
  margin-left: 20px;
  padding-top: 5px;
  color: white;
}
</style>