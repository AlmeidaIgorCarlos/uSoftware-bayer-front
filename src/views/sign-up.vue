<template>
  <div id="signup">
    <Form>
      <FormTitle title="Sign up uSoftware Bayer"/>
      <FormItem type="text" placeholderValue="First Name" />
      <FormItem type="text" placeholderValue="Last Name" />
      <FormItem type="text" placeholderValue="E-mail Address" />
      <FormItem type="password" placeholderValue="Password" />
      <FormItem type="button" value="sign up" placeholderValue="Password" />
      <FormItem type="button" value="cancel" placeholderValue="Password" />
    </Form>
  </div>
</template>

<script>
import Form from "../components/form";
import FormItem from "../components/form-item.vue";
import FormTitle from "../components/form-title";
export default {
  components: {
    FormItem,
    FormTitle,
    Form
  },
  mounted() {
    document.body.style = "background-color:black;";
  }
};
</script>

<style lang="scss" scoped>
#signup {
    width:100%;
}

body {
  background-color: black;
}
</style>