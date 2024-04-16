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

// export interface ITmbdClient {
//   getConfiguration: () => Promise<Configuration>;
//   getNowPlaying: (page: number) => Promise<MovieDetails[]>;
// }

export interface PageDetails<T> {
  results: T[];
  page: number;
  totalPages: number;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  image?: string;
}

export interface MoviesState {
  loading: boolean;
  top: Movie[];
  page: number;
  hasMorePages: boolean;
}
