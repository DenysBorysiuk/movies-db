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
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface KeywordItem {
  id: number;
  name: string;
}

export interface MoviesFilters {
  keywords?: number[];
  genres?: number[];
}

export interface Filters {
  keywords: KeywordItem[];
  genres: number[];
}

// interface ITmbdClient {
//   getConfiguration: () => Promise<Configuration>;
//   getNowPlaying: (page: number) => Promise<PageDetails<MovieDetails>>;
//   getMovies: (page: number, filters: MoviesFilters) => Promise<PageDetails<MovieDetails>>;
//   getKeywords: (query: string) => Promise<KeywordItem[]>;
// }
