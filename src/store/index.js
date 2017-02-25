import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    addTask (state, {task}) {
      state.tasks.push(task)
    },
    completeTask (state, {task}) {
      task.completed = !task.completed
    }
  }
})
