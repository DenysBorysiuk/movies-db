import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_API_TOKEN}`;

async function get<TBody>(relativeUrl: string): Promise<TBody> {
  const response = await axios.get(relativeUrl);

  return response.data;
}

interface PageResponse<TResult> {
  page: number;
  results: TResult[];
  total_pages: number;
  total_results: number;
}

interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  backdrop_path?: string | null;
}

interface Configuration {
  images: {
    base_url: string;
  };
}

interface ITmbdClient {
  getConfiguration: () => Promise<Configuration>;
  getNowPlaying: () => Promise<MovieDetails[]>;
}

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
