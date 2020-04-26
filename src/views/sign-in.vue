<template>
  <div id="signin">
    <Form>
      <FormTitle title="Sign Into uSoftware Bayer" />
      <FormItem type="text" placeholderValue="Email Address" :keyup="setSignInStateEmail" />
      <FormItem type="password" name="password" placeholderValue="Password" :keyup="setSignInStatePassword" />
      <FormItem type="button" value="sign in" />
      <FormItem type="button" value="sign up" :click="goToSignUp" />
    </Form>
  </div>
</template>

<script>
import Form from "../components/form";
import FormItem from "../components/form-item.vue";
import FormTitle from "../components/form-title";
import router from "../router";
import { mapActions } from "vuex";
import { setSignInStateAction } from "../store/actions/sign-in.action";
import { StateSignInModel } from "../models/sign-in.models";

export default {
  components: {
    FormItem,
    FormTitle,
    Form
  },
  mounted() {
    document.body.style = "background-color:black;";
  },
  methods: {
    ...mapActions([setSignInStateAction.name]),
    goToSignUp() {
      router.push("/signup");
    },
    setSignInStateEmail(value) {
      this.setSignInStateAction({
        email: value.srcElement.value
      });
    },
    setSignInStatePassword(value) {
      this.setSignInStateAction({
        password: value.srcElement.value
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#signin {
  width: 100%;
}

body {
  background-color: black;
}
</style>