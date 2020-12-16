import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = () => new Vuex.Store({
    state: () => ({
      counter: 0
    }),
    mutations: {
      add(state) {
        state.counter++
      }
    },
    // modules: {
    //   todos: {
    //     namespaced: true,
    //     state: () => ({
    //       list: []
    //     }),
    //     mutations: {
    //       add(state, { text }) {
    //         state.list.push({
    //           text,
    //           done: false
    //         })
    //       },
    //       remove(state, { todo }) {
    //         state.list.splice(state.list.indexOf(todo), 1)
    //       },
    //       toggle(state, { todo }) {
    //         todo.done = !todo.done
    //       }
    //     }
    //   }
    // }
  })
  export default store