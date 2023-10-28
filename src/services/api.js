import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '72aeab2a322c3635130c33f86690232e';

export const fetchTradingToday = async () => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  const response = await axios.get(`${BASE_URL}trending/movie/day?${params}`);
  return response.data.results;
};

export const searchMovies = async query => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    query,
  });

  const response = await axios.get(`${BASE_URL}search/movie?${params}`);
  return response.data.results;
};

export const fetchMovieById = async movieId => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  const response = await axios.get(`${BASE_URL}movie/${movieId}?${params}`);
  return response.data;
};

export const fetchReviewsByMovieId = async movieId => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?${params}`
  );
  return response.data.results;
};

export const fetchCreditsByMovieId = async movieId => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?${params}`
  );
  return response.data.cast;
};

const api = {
  fetchCreditsByMovieId,
  fetchReviewsByMovieId,
  fetchTradingToday,
  fetchMovieById,
  searchMovies,
};

export default api;
