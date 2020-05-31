<template>
  <div :style="{height: this.height, 'background-color': this.color }" id="content-bar">
    <div class="actions">
      <div class="content-bar-action pointer">
        <svg enable-background="new 0 0 512 512"  id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M256,512C114.625,512,0,397.391,0,256C0,114.609,114.625,0,256,0c141.391,0,256,114.609,256,256  C512,397.391,397.391,512,256,512z M256,64C149.969,64,64,149.969,64,256s85.969,192,192,192c106.047,0,192-85.969,192-192  S362.047,64,256,64z M288,384h-64v-96h-96v-64h96v-96h64v96h96v64h-96V384z"/></svg>
        <p>add</p>
      </div>
      <div class="content-bar-action pointer">
        <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1595 295q17 41-14 70l-493 493v742q0 42-39 59-13 5-25 5-27 0-45-19l-256-256q-19-19-19-45v-486l-493-493q-31-29-14-70 17-39 59-39h1280q42 0 59 39z"
          />
        </svg>
        <p>filter</p>
      </div>
      <div class="content-bar-action pointer">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="sign-out-alt"
          class="svg-inline--fa fa-sign-out-alt fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
          />
        </svg>
        <p>logout</p>
      </div>
    </div>
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

  background-color: var(--default-grey-color);
}

.actions {
  display: flex;
  position: absolute;
  right: 35px;
  justify-content: space-evenly;
  width: 175px
}

.content-bar-action {
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 25px;
  position: relative;

  right: 35px;
  top: 7px;
}

.content-bar-action p {
  position: relative;
  top: -8px;
  font-size: 0.7em;
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