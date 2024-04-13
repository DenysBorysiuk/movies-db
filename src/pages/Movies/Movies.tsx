import { useEffect } from 'react';
import { Container, Grid, LinearProgress, Typography } from '@mui/material';

import { fetchMovies } from '@/redux/moviesSlice.ts';

import { MovieCard } from '@/components/MovieCard';

import { useAppDispatch, useAppSelector } from '@/hooks';

const Movies = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movies.top);
  const loading = useAppSelector(state => state.movies.loading);
  const loggedIn = true;

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Now playing
      </Typography>

      {loading ? (
        <LinearProgress color="secondary" />
      ) : (
        <Grid container spacing={4}>
          {movies.map(movie => (
            <Grid item key={movie.id} xs={12} sm={6} md={4}>
              <MovieCard {...movie} enableUserAction={loggedIn} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Movies;
