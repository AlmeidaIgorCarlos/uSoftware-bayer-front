<template>
  <div id="signin">
    <Form>
      <FormTitle title="Sign Into uSoftware Bayer"/>
      <FormItem type="text" placeholderValue="Email Address" />
      <FormItem type="password" placeholderValue="Password" />
      <FormItem type="button" value="sign in" placeholderValue="Password" />
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
#signin {
    width:100%;
}

body {
  background-color: black;
}
</style>