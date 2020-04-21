<template>
  <form id="form">
    <slot></slot>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
:root{
  --form-item-fore-color: #b3b3b3;

}

#form {
  max-width: 350px;
  margin: 0 auto;

  margin-top: 20%;
}

#form > * {
    margin-top: 30px
}

#form > *[type="button"] {
    background-color:var(--form-item-fore-color);
    color: black;
    width: 100%;
    min-height: 40px;
    text-align: center;
    padding-top: 10px;
    font-size: 1em;
    font-weight: bold;
}

#form > *[type="button"]:hover {
    cursor: pointer;
}
</style>