import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  getters: {
    sortedTasks: (state) => {
      let sorted = state.tasks
      return sorted.sort(function (a, b) {
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1
        return 0
      })
    }
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
