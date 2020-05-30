<template>
  <div ref="lateralMenu" id="lateral-menu">
    <ul>
      <slot></slot>
    </ul>
    <img class="pointer" src="../assets/menu_icon.svg" @click="this.controlMenu" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: {},
      menuInitialWidth: "280px",
      menuContractedWidth: "70px"
    };
  },
  methods: {
    controlMenu(element) {
      const menuDomElement = document.getElementById("lateral-menu");
      if (!this.state.value)
        menuDomElement.style["width"] = this.menuContractedWidth;
      else menuDomElement.style["width"] = this.menuInitialWidth;
      this.state = !this.state.value ? { value: true } : { value: false };
    }
  }
};
</script>

<style lang="scss" scoped>
#lateral-menu {
  transition: width 0.5s;
  background-color: black;
  width: 280px;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
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

  color: white;
}

#lateral-menu > img {
  transition: left 0.5s;
  position: absolute;
  right: 10px;
  bottom: 10px;

  width: 30px;
  height: 30px;
}
</style>