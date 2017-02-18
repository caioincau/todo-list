<template>
  <section class="cepChecker">
    <label>Digite seu CEP</label>
    <input type="text"></input>
    <router-link to="/">Go to Foo</router-link>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="less">
.cepChecker{
  margin: 20px 0;
  text-align: center;

  label{
    display: block;
  }

  input{
    height: 2em;
    padding: 2px;
  }
}
</style>
