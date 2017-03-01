import Vue from 'vue'
import TaskList from 'src/components/TaskList'
import { Task } from 'src/models/Task'



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

const mockedStore = {
  state: {
    tasks: []
  },
  getters: {
    sortedTasks: taskList
  },
  mutations: {
    addTask (state, {task}) {
      state.tasks.push(task)
    },
    completeTask (state, {task}) {
      task.completed = !task.completed
    }
  }
}

function getMountedComponent(Component, propsData) {
   Vue.store = mockedStore
   const Ctor = Vue.extend(Component);
   const vm = new Ctor({propsData});
   vm.$store = mockedStore;
   vm.$mount();
   return vm;
 }

describe('TaskList.vue', () => {
  let vm = {}
  beforeEach(function() {
    vm = getMountedComponent(TaskList);
  });

  it('should render correct contents', () => {
    expect(vm.$el.querySelectorAll('.todo').length).to.equal(3)
  })
})
