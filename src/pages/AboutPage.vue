<template>
  <div class="about">
    <h1>This is the about page, its pretty neat</h1>
    <MovieListItem v-for="m in watchList" :key="m.title" :movie="m" />
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'AboutPage',
  setup() {
    return {
      watchList: computed(() => AppState.watchList)
    }
  }
}
</script>
