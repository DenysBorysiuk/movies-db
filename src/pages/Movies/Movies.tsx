import { useCallback, useContext, useState } from 'react';
import { Container, Grid, LinearProgress, Typography } from '@mui/material';

import { AuthContext, anonymousUser } from '@/context/AuthContext';
import { useIntersectionObserver } from '@/hooks';
import { MoviesFilter, MovieCard } from '@/components';

import { useGetConfigurationQuery, useGetMoviesQuery } from '@/services/tmdb';
import { MoviesQuery } from '@/types';

export const Movies = () => {
  const [query, setQuery] = useState<MoviesQuery>({ page: 1, filters: {} });
  const { data: configuration } = useGetConfigurationQuery();
  const { data, isFetching } = useGetMoviesQuery(query);

  const movies = data?.results ?? [];
  const hasMorePages = data?.hasMorePages;

  const { user } = useContext(AuthContext);
  const loggedIn = user != anonymousUser;

  const onIntersect = useCallback(() => {
    if (hasMorePages) {
      setQuery(q => ({ ...q, page: q.page + 1 }));
    }
  }, [hasMorePages]);

  const [targetRef] = useIntersectionObserver({ onIntersect });

  function formatImageUrl(imagePath?: string | null) {
    return imagePath && configuration
      ? `${configuration.images.base_url}w780${imagePath}`
      : undefined;
  }

  return (
    <Grid container spacing={2} sx={{ flexWrap: 'nowrap', py: 8 }}>
      <Grid item xs="auto">
        <MoviesFilter
          onApply={filters => {
            const moviesFilters = {
              keywords: filters?.keywords.map(k => k.id),
              genres: filters?.genres,
            };

            setQuery({
              page: 1,
              filters: moviesFilters,
            });
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            Now playing
          </Typography>

          <Grid container spacing={4}>
            {movies.map(movie => (
              <Grid item key={movie.id} xs={12} sm={6} md={4}>
                <MovieCard
                  {...movie}
                  enableUserAction={loggedIn}
                  image={formatImageUrl(movie.backdrop_path)}
                />
              </Grid>
            ))}
          </Grid>
          <div ref={targetRef}>{isFetching && <LinearProgress color="secondary" />}</div>
        </Container>
      </Grid>
    </Grid>
  );
};
