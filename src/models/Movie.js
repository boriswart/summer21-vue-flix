export class Movie {
  constructor(data) {
    this.title = data.title
    this.popularity = data.popularity
    this.poster = 'https://image.tmdb.org/t/p/w500' + data.poster_path
    this.poster2 = 'https://image.tmdb.org/t/p/w500' + data.backdrop_path
    this.overview = data.overview
  }
}
