import axios from 'axios';

import { Configuration, MovieDetails, PageResponse, MoviesFilters, KeywordItem } from '@/types';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_API_TOKEN}`;

const get = async <TBody>(relativeUrl: string): Promise<TBody> => {
  const response = await axios.get(relativeUrl);

  return response.data;
};

export const client = {
  getConfiguration: async () => {
    const response = await get<Configuration>('/configuration');
    return response;
  },

  getNowPlaying: async (page: number = 1) => {
    const response = await get<PageResponse<MovieDetails>>(`/movie/now_playing?page=${page}`);
    return {
      results: response.results,
      totalPages: response.total_pages,
      page: response.page,
    };
  },

  getKeywords: async (query: string) => {
    const response = await get<PageResponse<KeywordItem>>(`/search/keyword?query=${query}`);

    return response.results;
  },

  getMovies: async (page: number, filters: MoviesFilters) => {
    const params = new URLSearchParams({
      page: page.toString(),
    });

    if (filters.keywords?.length) {
      params.append('with_keywords', filters.keywords.join('|'));
    }

    if (filters.genres?.length) {
      params.append('with_genres', filters.genres.join(','));
    }

    const query = params.toString();
    const response = await get<PageResponse<MovieDetails>>(`/discover/movie?${query}`);

    return {
      results: response.results,
      totalPages: response.total_pages,
      page: response.page,
    };
  },
};
