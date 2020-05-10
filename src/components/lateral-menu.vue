<template>
  <div ref="lateralMenu" id="lateral-menu">
    <ul>
      <slot></slot>
    </ul>
    <div class="pointer" @click="this.controlMenu">
      <span class="pointer">Menu</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lateralMenu: {}
    };
  },
  methods: {
    controlMenu(element) {
      if (element.target.nodeName != "DIV") return;
      const menuDOM = this.$refs.lateralMenu;
      const elementDOM = element.srcElement;
      const menu = this.lateralMenu;

      if (!menu.state) {
        menuDOM.style = "width: 78px";
        elementDOM.style = "left: 5px";
      } else {
        menuDOM.style = "width: 300px";
        elementDOM.style = "left: 230px";
      }

      menu.state = !menu.state ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped>
#lateral-menu {
  transition: width 0.5s;
  margin-left: -10px;
  margin-top: -10px;
  background-color: black;
  width: 300px;
  min-height: 102vh;
}

#lateral-menu ul {
  margin-top: 50px;
  margin-left: -22px;
  list-style: none;
}

#lateral-menu span {
  position: relative;

  top: 22px;
  left: 10px;

  text-transform: uppercase;
}

#lateral-menu > div {
  position: absolute;
  left: 230px;
  bottom: 10px;

  width: 65px;
  height: 60px;
  border-radius: 100px;

  background-color: rgba($color: #66c2ff, $alpha: 1);

  transition: left 0.5s;

}

.pointer{
  cursor: pointer;
  outline: none;
}

</style>