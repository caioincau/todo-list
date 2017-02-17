import Vue from 'vue'
import InputTask from 'src/components/InputTask'

describe('InputTask.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(InputTask)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelectorAll('.new-todo').length).to.equal(1)
  })
  it('should create the task correctly', () => {
    const Constructor = Vue.extend(InputTask)
    const vm = new Constructor().$mount()
    let task = vm.createTask('Comprar leite')
    expect(task.title).to.equal('Comprar leite')
  })
})
