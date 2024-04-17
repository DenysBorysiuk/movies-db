import { Filters } from '@/types';

export interface MoviesFilterProps {
  onApply(filters: Filters): void;
}
