<template>
  <div class="container-fluid">
    <div class="row my-4">
      <div class="col-10 m-auto">
        <Search />
      </div>
    </div>
    <div class="row page">
      <div class="col-md-4 ">
        <!--                  v the movie object           vvvvv propertyname in MovieListItem    -->
        <MovieListItem v-for="m in movies" :key="m.title" :movie="m" />
        <!-- if not on page 1 -->
        <button v-if="currentPage != 1" @click="goNext(-1)">
          Prev
        </button>
        <!-- if not on last page -->
        <button v-if="currentPage != totalPages" @click="goNext(1)">
          Next
        </button>
      </div>
      <div class="sticky col-8">
        <!-- MOVIE DETAILS HERE -->
        <MovieDetails />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { moviesService } from '../services/MoviesService'
export default {
  setup() {
    return {
      movies: computed(() => AppState.movies),
      totalPages: computed(() => AppState.totalPages),
      currentPage: computed(() => AppState.currentPage),
      goNext(n) {
        AppState.currentPage += n
        moviesService.findMovies()
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
