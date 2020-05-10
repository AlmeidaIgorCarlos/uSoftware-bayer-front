<template>
  <div :style="{height: this.height, 'background-color': this.color }" id="content-bar"></div>
</template>

<script>
export default {
  props: {
    height: String,
    color: String,
    applyMargin: Boolean
  }
};
</script>

<style lang="scss" scoped>
#content-bar {
  position: relative;
  left: 0px;
  z-index: -1;

  width: 100%;
  height: 70px;

  background-color: rgba($color: #d9d9d9, $alpha: 1);
}
</style>