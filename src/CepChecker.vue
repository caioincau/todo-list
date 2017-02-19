<template>
  <section class="cepChecker">
    <label>Digite seu CEP</label>
    <input @blur="checkCep" type="text"></input>
    <router-link class="home" to="/">Ver tarefas</router-link>
  </section>
</template>

<script>
export default {
  data () {
    return {
      address: {}
    }
  },
  methods: {
    checkCep ($event) {
      let cep = $event.target.value
      this.$http.get('http://api.postmon.com.br/v1/cep/' + cep)
      .then((res) => {
        this.address = res.body
      }, (res) => {
        console.log(res)
      })
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
