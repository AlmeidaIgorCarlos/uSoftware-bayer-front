<template>
  <div id="signin">
    <Form>
      <FormTitle title="Sign Into uSoftware Bayer" />
      <FormItem type="text" placeholderValue="Email Address" :keyup="setSignInStateEmail" />
      <FormItem
        type="password"
        name="password"
        placeholderValue="Password"
        :keyup="setSignInStatePassword"
      />
      <FormItem type="button" value="sign in" :click="signIn" />
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
import { mapState } from "vuex";
import { setSignInStateAction } from "../store/actions/sign-in.action";
import { setCurrentUserStateAction } from "../store/actions/current-user.action";
import {
  signIn as signInServiceCall,
  validateSignIn as validateSignInServiceCall
} from "../services/sign-in.service";

export default {
  components: {
    FormItem,
    FormTitle,
    Form
  },
  computed: {
    ...mapState(["signin"])
  },
  mounted() {
    document.body.style = "background-color:black;";
  },
  methods: {
    ...mapActions([setSignInStateAction.name, setCurrentUserStateAction.name]),
    signIn() {
      const localStateSignInModel = {
        email: this.signin.email,
        password: this.signin.password
      };

      if (validateSignInServiceCall(localStateSignInModel)) {
        signInServiceCall(localStateSignInModel)
          .then(e => {
            this.setCurrentUserStateAction({
              id: e.id,
              firstName: e.firstName,
              lastName: e.lastName,
              role: e.role,
              accessToken: e.access_token
            });
            if (e.role === "user") throw new Error("Users with role 'user' are not allowed to use this portal")
            else router.push("/administrator");
            alert("You have successfully signed into the system");
          })
          .catch(e => alert(e.message));
      }else { alert('Invalid Sign In Data') }
    },
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
  background-color: black;
}

</style>