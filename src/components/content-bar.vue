<template>
  <div :style="{height: this.height, 'background-color': this.color }" id="content-bar">
    <img src="../assets/sign_out_icon.svg" class="pointer" @click="signOut" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import router from "../router/index";
import { setLocalStorageItem } from "../services/local-storage.service";

export default {
  props: {
    height: String,
    color: String,
    applyMargin: Boolean
  },
  computed: { ...mapState(["currentUser"]) },
  methods: {
    signOut: () => {
      setLocalStorageItem('signin', {})
      router.push("/", () => {
        router.go(0);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#content-bar {
  position: relative;
  left: 0px;

  width: 100%;
  height: 70px;

  background-color: rgba($color: #d9d9d9, $alpha: 1);
}

#content-bar > img {
  width: 40px;
  position: absolute;

  right: 10px;
  top: 15px;
}

.pointer {
  cursor: pointer;
  outline: none;
}
</style>