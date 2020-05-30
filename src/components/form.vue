<template>
  <form id="form">
    <slot></slot>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#form {
  max-width: 350px;
  margin: 0 auto;
}

#form > * {
    margin-top: 30px
}

#form > *[type="button"] {
  --form-fore-color: #b3b3b3;
    background-color:var(--form-fore-color);
    color: black;
    width: 100%;
    min-height: 40px;
    text-align: center;
    padding-top: 10px;
    font-weight: bold;
}

#form > *[type="button"]:hover {
    cursor: pointer;
}
</style>