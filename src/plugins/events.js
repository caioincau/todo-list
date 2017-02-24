function install (Vue) {
  const events = new Vue({
    methods: {
      emit (name, data = null) {
        this.$emit(name, data)
      },
      on (name, cb) {
        this.$on(name, cb)
      }
    }
  })
  Vue.prototype.$events = events
}

export default install
