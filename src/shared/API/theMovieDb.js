import axios from 'axios';
const API_KEY = 'c1b8c874be54ebc5c34c225dbd6a36f5';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY,
  },
});

export const imagePath = 'https://image.tmdb.org/t/p/w185/';
export const imageSmallPath = 'https://image.tmdb.org/t/p/w92/';

export async function fetchPoPularMovies(page) {
  return instance

    .get('trending/movie/day', {
      params: {
        page,
        language: 'en-US',
      },
    })
    .then(result => {
      const results = result.data.results;

      return results.map(({ id, name, original_title, title }) => ({
        id,
        title: name ? name : title ? title : original_title,
      }));
      return [];
    });
}

export async function fetchSearchMovies(query, page) {
  return instance
    .get('search/movie', {
      params: {
        page,
        include_adult: false,
        query,
        sort_by: 'popularity.desc',
      },
    })
    .then(result => {
      const results = result.data.results;
      return results.map(({ id, name, original_title, title }) => ({
        id,
        title: name ? name : title ? title : original_title,
      }));
    });
}

export async function fetchMovieDetails(movieId) {
  return instance.get(`movie/${movieId}`, {}).then(({ data }) => data);
}

export async function fetchMovieCredits(movieId) {
  return instance
    .get(`movie/${movieId}/credits`, {})
    .then(({ data }) => data.cast);
}

export async function fetchMovieReviews(movieId) {
  return instance
    .get(`movie/${movieId}/reviews`, {})
    .then(({ data }) => data.results);
}
