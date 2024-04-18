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

export interface MoviesFilters {
  keywords?: number[];
  genres?: number[];
}

export interface MoviesQuery {
  page: number;
  filters: MoviesFilters;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Configuration {
  images: {
    base_url: string;
  };
}

export interface KeywordItem {
  id: number;
  name: string;
}

export interface MoviesState {
  results: MovieDetails[];
  lastPage: number;
  hasMorePages: boolean;
}

export interface Filters {
  keywords: KeywordItem[];
  genres: number[];
}
