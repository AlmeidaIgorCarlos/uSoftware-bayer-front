<template>
  <li class="pointer" ref="menuItem" @click="setMenuItemStatus">
    <div>
      <img :style="{width: this.imageWidth}" :src="this.imageLocation" />
      <p>{{this.text}}</p>
    </div>
    <div ></div>
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
      this.$emit("activateComponent");
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-left: 30px;
}

li>div:first-of-type{
  display: flex;
}

li>div:not(:first-of-type) {
  min-height: 5px;
  max-width: 200%;
  margin-left: -100px;
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