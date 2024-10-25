
import axios from 'axios';
import { API_KEY, BASE_URL } from './config';

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getNowplaying = async (page = 1) => {
  const response = await tmdbApi.get('/movie/now_playing', {
    params: { page },
  });
  return response.data;
};

export const getPopularMovies = async (page = 1) => {
  const response = await tmdbApi.get('/movie/popular', {
    params: { page },
  });
  return response.data;
};
export const getTopRated = async (page = 1) => {
  const response = await tmdbApi.get('/movie/top_rated', {
    params: { page },
  });
  return response.data;
};
export const getUpcoming = async (page = 1) => {
  const response = await tmdbApi.get('/movie/upcoming', {
    params: { page },
  });
  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const response = await tmdbApi.get(`/movie/${movieId}`);
  return response.data;
};

export const searchMovies = async (query, page = 1) => {
  const response = await tmdbApi.get('/search/movie', {
    params: { query, page },
  });
  return response.data;
};

export const getMovieCredits = async (movieId) => {
  const response = await tmdbApi.get(`/movie/${movieId}/credits`);
  return response.data;
};

export const getMovieVideos = async (movieId) => {
  const response = await tmdbApi.get(`/movie/${movieId}/videos`);
  return response.data;
};

