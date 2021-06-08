<template>
  <form @submit.prevent="findMovies">
    <div class="d-flex w-100 align-items-center">
      <input type="text" class="form-control" placeholder="search for a movie" v-model="state.query">
      <button type="submit"
              class="btn"
              :disabled="!state.query"
              :class="{
                'btn-primary': state.query,
                'btn-danger': !state.query
              }"
      >
        Search
      </button>
    </div>
  </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { moviesService } from '../services/MoviesService'
import { AppState } from '../AppState'

export default {
  setup() {
    const state = reactive({
      query: ''
    })

    return {
      state,
      test() {
        console.log('you are typing')
      },
      findMovies() {
        AppState.currentPage = 1
        AppState.currentQuery = state.query
        moviesService.findMovies()
        state.query = ''
      }
    }
  }
}
</script>

<style>

</style>
