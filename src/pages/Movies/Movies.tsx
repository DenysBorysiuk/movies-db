import { useContext, useEffect } from 'react';
import { Container, Grid, LinearProgress, Typography } from '@mui/material';

import { fetchNextPage } from '@/redux/moviesSlice.ts';

import { MovieCard } from '@/components/MovieCard';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { AuthContext, anonymousUser } from '@/context/AuthContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Movies = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movies.top);
  const loading = useAppSelector(state => state.movies.loading);
  const hasMorePages = useAppSelector(state => state.movies.hasMorePages);
  const { user } = useContext(AuthContext);
  const loggedIn = user != anonymousUser;

  const [targetRef, entry] = useIntersectionObserver();

  useEffect(() => {
    if (entry?.isIntersecting && hasMorePages) {
      dispatch(fetchNextPage());
    }
  }, [dispatch, entry?.isIntersecting, hasMorePages]);

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
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
  );
};

export default Movies;
