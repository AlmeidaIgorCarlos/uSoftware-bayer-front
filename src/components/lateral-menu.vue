<template>
  <div ref="lateralMenu" id="lateral-menu">
    <ul>
      <slot></slot>
    </ul>
      <img class="pointer" src="../assets/menu_icon.svg" @click="this.controlMenu"/>
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
      if (element.target.nodeName != "IMG") return;
      const menuDOM = this.$refs.lateralMenu;
      const elementDOM = element.srcElement;
      const menu = this.lateralMenu;

      if (!menu.state) {
        menuDOM.style = "min-width: 80px; width: 80px";
        elementDOM.style = "left: 5px";
      } else {
        menuDOM.style = "min-width: 260";
        elementDOM.style = "left: 180px";
      }

      menu.state = !menu.state ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped>
#lateral-menu {
  transition: min-width 0.5s;
  margin-left: -5px;
  background-color: black;
  min-width: 260px;
  min-height: 100vh;
  overflow:hidden;
}

#lateral-menu ul {
  margin-top: 45px;
  padding-left: 0px;
  list-style: none;
}

#lateral-menu span {
  position: relative;

  top: 17px;
  left: 10px;

  text-transform: uppercase;
  color: white
}

#lateral-menu > img {
  position: absolute;
  left: 180px;
  bottom: 10px;

  width: 65px;
  height: 50px;

  transition: left 0.5s;
}

.pointer{
  cursor: pointer;
  outline: none;
}

</style>