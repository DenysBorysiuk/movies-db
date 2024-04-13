import axios from 'axios';

import { Configuration, ITmbdClient, MovieDetails, PageResponse } from '@/types';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_API_TOKEN}`;

const get = async <TBody>(relativeUrl: string): Promise<TBody> => {
  const response = await axios.get(relativeUrl);

  return response.data;
};

export const client: ITmbdClient = {
  getConfiguration: async () => {
    const response = await get<Configuration>('/configuration');
    return response;
  },

  getNowPlaying: async () => {
    const response = await get<PageResponse<MovieDetails>>('/movie/now_playing');
    return response.results;
  },
};
