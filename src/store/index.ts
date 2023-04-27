import { createStore } from 'vuex'
import { todosState } from './modules'

export const store = createStore({
  modules: {
    todos: todosState
  }
})
