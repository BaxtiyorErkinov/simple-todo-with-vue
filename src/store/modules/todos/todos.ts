import type { ITodo } from '@/models'

interface ITodosState {
  todos: ITodo[]
}

export const todosState = {
  state: (): ITodosState => {
    return {
      todos: []
    }
  },
  mutations: {
    setTodos: (state: ITodosState, data: ITodo[]) => {
      state.todos = data
    }
  },
  actions: {
    setTodo: ({ commit }: any) => {
      commit('setTodos', {
        data: ['salom']
      })
    }
  }
}
