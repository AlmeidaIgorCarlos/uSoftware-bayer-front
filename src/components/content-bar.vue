<template>
  <div :style="{height: this.height, 'background-color': this.color }" id="content-bar">
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="sign-out-alt"
      class="svg-inline--fa fa-sign-out-alt fa-w-16 pointer"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
      />
    </svg>
    <div id="personal-info">
      <div id="info">
        <p>Welcome {{this.fullName}}</p>
      </div>
    </div>
  </div>
</template>

<script>
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

  background-color: rgba($color: #d9d9d9, $alpha: 1);
}

#content-bar > svg {
  width: 25px;
  position: absolute;

  right: 35px;
  top: 13px;
}

#personal-info {
  display: flex;
  position: relative;

  width: 500px;
  top: 18px;
  left: 3%;
  font-weight: bold;
}

#info p {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>