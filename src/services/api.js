import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  params: {
    api_key: 'c2d9f7b4820307867e946fc0ac1d1255',
    language: 'pt-BR'
  }
});

export default api;
