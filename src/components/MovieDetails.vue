<template>
  <div class="card" v-if="movie">
    <div class="card-body">
      <img :src="movie.poster" alt="" height="250">
      <h3 class="d-flex w-100 justify-content-between">
        <span>
          {{ movie.title }}
        </span>
        <span>
          {{ movie.popularity }}
        </span>
      </h3>
      <p>{{ movie.overview }}</p>
      <button @click="add" v-if="!inList">
        Add to watchlist
      </button>
      <div v-else>
        This movie is already in your
        <router-link :to="{name: 'About'}">
          watchlist
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      movie: computed(() => AppState.activeMovie),
      inList: computed(() => AppState.watchList.find(m => m.title === AppState.activeMovie.title)),
      add() {
        AppState.watchList.push(AppState.activeMovie)
      }
    }
  }
}
</script>

<style>

</style>
