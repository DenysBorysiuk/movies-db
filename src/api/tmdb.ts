const configuration = {
  //   apiUrl: import.meta.env.BASE_URL,
  apiUrl: 'https://api.themoviedb.org',
  apiToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGY5N2I3ZjczY2RlMjgwYzI0YjhkMGE0MDY1ZjU1MiIsInN1YiI6IjY2MTgyZGMwODQ0NDhlMDE2MjkzOTFhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x45N2S7D8IizR8ocItnyrvLr73xjiDH63PnGI9vWHp8',
  //   apiToken: import.meta.env.API_TOKEN,
};

console.log(configuration);

const apiBasePath = `${configuration.apiUrl}/3`;

async function get<TBody>(relativeUrl: string): Promise<TBody> {
  const headers = new Headers();
  headers.append('Accept', 'application/json');
  headers.append('Authorization', `Bearer ${configuration.apiToken}`);

  const requestOptions = {
    method: 'GET',
    headers: headers,
  };

  const response = await fetch(`${apiBasePath}${relativeUrl}`, requestOptions);
  const value: TBody = await response.json();
  return value;
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
