<template>
  <div ref="lateralMenu" id="lateral-menu">
    <ul>
      <slot></slot>
    </ul>
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="bars"
      class="svg-inline--fa fa-bars fa-w-14 pointer"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      @click="this.controlMenu"
    >
      <path
        fill="white"
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
      />
    </svg>
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
  margin-top: 50px;
  padding-left: 0px;
  list-style: none;
}

#lateral-menu span {
  position: relative;

  top: 17px;
  left: 10px;

  color: white;
}

#lateral-menu > svg {
  transition: left 0.5s;
  position: absolute;
  right: 15px;
  bottom: 10px;

  width: 30px;
  height: 30px;
}
</style>