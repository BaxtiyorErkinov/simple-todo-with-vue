import { reactive } from 'vue'
export default {
  setup() {
    const state: { count: number } = reactive({ count: 1 })
    function increment() {
      state.count++
    }
    return { state, increment }
  }
}
