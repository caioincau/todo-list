import Vue from 'vue'
import InputTask from 'src/components/InputTask'

describe('InputTask.vue', () => {
  it('should render correct contents', () => {
    const Ctor = Vue.extend(InputTask)
    const vm = new Ctor().$mount()
    console.log(vm.$el.querySelectorAll('.new-todo'))
    expect(vm.$el.querySelectorAll('.new-todo').length).to.equal(1)
  })
})
