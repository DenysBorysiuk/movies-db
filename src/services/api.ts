import axios from 'axios';

import { Configuration, MovieDetails, PageResponse } from '@/types';

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
};
