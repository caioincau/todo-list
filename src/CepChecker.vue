<template>
  <section class="cepChecker">
    <label>Digite seu CEP</label>
    <input type="text"></input>
    <router-link class="home" to="/">Ver tarefas</router-link>
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
.home{
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 5px;
  text-align: center;
}
.cepChecker{
  margin: 20px 0;
  text-align: center;

  label{
    display: block;
  }

  input{
    margin: 20px;
    height: 2em;
    padding: 2px;
  }
}
</style>
