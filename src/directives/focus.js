export default {
  inserted (el, binding) {
    if (binding.value === true) el.focus()
  }
}
