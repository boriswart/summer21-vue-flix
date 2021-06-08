import axios from 'axios'
import { AppState } from '../AppState'
import { Movie } from '../models/Movie'

class MoviesService {
  async findMovies() {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=545c6ef058e65396849dfbbf381cbca3&page=${AppState.currentPage}&include_adult=false&query=${AppState.currentQuery}`)
    AppState.movies = res.data.results.map(m => new Movie(m)).sort((a, b) => b.popularity - a.popularity)
    AppState.totalPages = res.data.total_pages
  }
}

export const moviesService = new MoviesService()
