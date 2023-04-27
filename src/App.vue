<script setup lang="ts">
import type { ITodo } from './models'

import { ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { getTodos } from './utils'
import type { AxiosResponse } from 'axios'
import { useStore } from 'vuex'

type IState = {
  todos: ITodo[]
  error: boolean
}

const state = ref<IState>({
  todos: [],
  error: false
})
const store = (function () {
  return useStore()
})()

const { isLoading } = useQuery({
  queryKey: ['todos'],
  queryFn: () => getTodos(10),

  onError: () => {
    state.value.error = true
  },
  onSuccess: ({ data }: AxiosResponse<ITodo[]>) => {
    store.commit('setTodos', data)
    state.value.todos = data
    state.value.error = false
  }
})
</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>
  <ul v-if="state.todos" v-for="todo of state.todos">
    <li>{{ todo.title }}</li>
  </ul>
</template>

<style scoped>
.active {
  font-size: xx-large;
}
</style>
