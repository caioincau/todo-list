import Vue from 'vue'
import TaskList from 'src/components/TaskList'
import { Task } from 'src/models/Task'


function getMountedComponent(Component, propsData) {
   const Ctor = Vue.extend(Component);
   const vm = new Ctor({propsData}).$mount();
   return vm;
 }

describe('TaskList.vue', () => {

  let vm = {}
  beforeEach(function() {
    let taskList = []
    let task = new Task()
    task.title = 'Comprar Frango'
    let task2 = new Task()
    task2.title = 'Comprar Batata Doce'
    let task3 = new Task()
    task3.title = 'Ficar Monstro'
    taskList.push(task)
    taskList.push(task2)
    taskList.push(task3)
    vm = getMountedComponent(TaskList, {
        todoList: taskList
      });
  });

  it('should render correct contents', () => {
    expect(vm.todoList.length).to.equal(3)
  })
})
