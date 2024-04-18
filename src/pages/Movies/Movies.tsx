import { useContext, useEffect, useState } from 'react';
import { Container, Grid, LinearProgress, Typography } from '@mui/material';

import { fetchNextPage, resetMovies } from '@/redux/moviesSlice.ts';

import { MovieCard } from '@/components/MovieCard';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { AuthContext, anonymousUser } from '@/context/AuthContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { MoviesFilter } from '@/components';
import { Filters } from '@/types';

export const Movies = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movies.top);
  const loading = useAppSelector(state => state.movies.loading);
  const hasMorePages = useAppSelector(state => state.movies.hasMorePages);
  const { user } = useContext(AuthContext);
  const loggedIn = user != anonymousUser;

  const [targetRef, entry] = useIntersectionObserver();

  const [filters, setFilters] = useState<Filters>();

  useEffect(() => {
    dispatch(resetMovies());
  }, [dispatch]);

  useEffect(() => {
    if (entry?.isIntersecting && hasMorePages) {
      const moviesFilters = filters
        ? {
            keywords: filters?.keywords.map(k => k.id),
            genres: filters?.genres,
          }
        : undefined;

      dispatch(fetchNextPage(moviesFilters));
    }
  }, [dispatch, entry?.isIntersecting, filters, hasMorePages]);

  return (
    <Grid container spacing={2} sx={{ flexWrap: 'nowrap', py: 8 }}>
      <Grid item xs="auto">
        <MoviesFilter
          onApply={filters => {
            dispatch(resetMovies());
            setFilters(filters);
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
                <MovieCard {...movie} enableUserAction={loggedIn} />
              </Grid>
            ))}
          </Grid>
          <div ref={targetRef}>{loading && <LinearProgress color="secondary" />}</div>
        </Container>
      </Grid>
    </Grid>
  );
};
