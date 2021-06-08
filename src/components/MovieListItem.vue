<template>
  <div class="bg-white shadow my-3 hoverable rounded" @click="setActiveMovie(movie)">
    <div class="d-flex align-items-center">
      <img :src="movie.poster" :alt="movie.title" :title="movie.title" height="125" class="rounded-left">
      <div class="d-flex flex-grow-1 justify-content-between mx-3">
        <p>
          <b>
            {{ movie.title }}
          </b>
        </p>
        <h3 :class="{
          'popular': movie.popularity > 90,
          'rotten': movie.popularity < 60
        }"
        >
          {{ movie.popularity }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
export default {
  props: {
    movie: { type: Object, required: true }
  },
  setup(props) {
    return {
      setActiveMovie() {
        AppState.activeMovie = props.movie
      }
    }
  }
}
</script>

<style scoped>

.hoverable{
  cursor: pointer;
}

.popular{
  color: green;
}
.rotten{
  color: red;
}

</style>
