<template>
  <div :style="{height: this.height, 'background-color': this.color }" id="content-bar">
    <img src="../assets/sign_out_icon.svg" class="pointer" @click="signOut" />
    <div id="personal-info">
      <img src="../assets/user_tie_icon.svg" @click="signOut" />
      <div id="info">
        <p>ID: {{this.currentUser.id}}</p>
        <p>Name: {{this.fullName}}</p>
        <p>Role: {{this.currentUser.role}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import router from "../router/index";
import {
  setLocalStorageItem,
  getItemFromLocalStorage
} from "../services/local-storage.service";

export default {
  props: {
    height: String,
    color: String,
    applyMargin: Boolean
  },
  computed: {
    currentUser() {
      return this.getCurrentUser();
    },
    fullName() {
      const currentUser = this.getCurrentUser();
      return `${currentUser.firstName} ${currentUser.lastName}`;
    }
  },
  methods: {
    signOut: () => {
      setLocalStorageItem("signin", {});
      router.push("/", () => {
        router.go(0);
      });
    },
    getCurrentUser() {
      const stateCurrentUser = this.$store.state.currentUser;
      if (typeof stateCurrentUser.id === "string") return stateCurrentUser;
      else return getItemFromLocalStorage("signin");
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
  top: 30px;
}

.pointer {
  cursor: pointer;
  outline: none;
}

#personal-info {
  display: flex;
  position: relative;

  width: 500px;
  top: 15px;
  left: 30px;
}

#personal-info > img {
  width: 45px;
}

#info {
  padding-left: 30px;
  font-size: 20px;
}

#info p {
  margin-top: 0px;
  margin-bottom: 0px;

  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: sans-serif;
}
</style>