<template>
  <div id="signup">
    <Form>
      <FormTitle title="Sign up uSoftware Bayer" />
      <FormItem
        type="text"
        placeholderValue="First Name"
        :keyup="setFirstNameState"
      />
      <FormItem
        type="text"
        placeholderValue="Last Name"
        :keyup="setLastNameState"
      />
      <FormItem
        type="text"
        placeholderValue="E-mail Address"
        :keyup="setEmailState"
      />
      <FormItem
        type="password"
        placeholderValue="Password"
        :keyup="setPasswordState"
      />
      <FormItem
        type="password"
        placeholderValue="Password Confirmation"
        :keyup="setPasswordConfirmationState"
      />
      <FormItem
        type="button"
        value="sign up"
        placeholderValue="Password"
        :click="signUp"
      />
      <FormItem
        type="button"
        value="cancel"
        placeholderValue="Password"
        :click="goToSignIn"
      />
    </Form>
  </div>
</template>

<script>
import Form from "../components/form";
import FormItem from "../components/form-item.vue";
import FormTitle from "../components/form-title";
import router from "../router";
import { mapState, mapActions } from "vuex";
import {
  signUp,
  validateSignUp,
  validateSignUpPassword,
} from "../services/sign-up.service";

export default {
  components: {
    FormItem,
    FormTitle,
    Form,
  },
  computed: {
    ...mapState(["signup"]),
  },
  mounted() {
    document.body.style = "background-color:black;";
  },
  methods: {
    ...mapActions(["setSignUpStateAction"]),
    signUp() {
      const localStateSignUp = {
        firstName: this.signup.firstName,
        lastName: this.signup.lastName,
        email: this.signup.email,
        password: this.signup.password,
        passwordConfirmation: this.signup.passwordConfirmation,
        role: "administrator",
      };

      const isSignUpValidated = validateSignUp(localStateSignUp);
      const isSignUpPasswordValidated = validateSignUpPassword(
        localStateSignUp
      );

      if (!(isSignUpValidated && isSignUpPasswordValidated)) {
        alert("Invalid Sign Up Data");
        return;
      }

      signUp(localStateSignUp)
        .then((signUp) => {
          alert("You have successfully registered into the system");
          this.goToSignIn();
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    goToSignIn() {
      router.push("/signin");
    },
    setFirstNameState(value) {
      this.setSignUpStateAction({
        firstName: value.srcElement.value,
      });
    },
    setLastNameState(value) {
      this.setSignUpStateAction({
        lastName: value.srcElement.value,
      });
    },
    setEmailState(value) {
      this.setSignUpStateAction({
        email: value.srcElement.value,
      });
    },
    setPasswordState(value) {
      this.setSignUpStateAction({
        password: value.srcElement.value,
      });
    },
    setPasswordConfirmationState(value) {
      this.setSignUpStateAction({
        passwordConfirmation: value.srcElement.value,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#signup {
  width: 100%;
}

body {
  background-color: black;
}
</style>