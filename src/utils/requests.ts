import { mainApi } from '@/libs'
import type { ITodo } from '@/models'

export const getTodos = async (limit: number = 10) =>
  await mainApi.get<ITodo[]>('/todos', {
    params: {
      _limit: limit
    }
  })
