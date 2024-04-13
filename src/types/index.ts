export interface PageResponse<TResult> {
  page: number;
  results: TResult[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  backdrop_path?: string | null;
}

export interface Configuration {
  images: {
    base_url: string;
  };
}

export interface ITmbdClient {
  getConfiguration: () => Promise<Configuration>;
  getNowPlaying: () => Promise<MovieDetails[]>;
}
