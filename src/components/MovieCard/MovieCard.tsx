import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface Props {
  id: number;
  title: string;
  popularity: number;
  overview: string;
  image?: string;
}

export const MovieCard = ({
  id,
  title,
  overview,
  popularity,
  image = '/movie-thumb.png',
}: Props) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia component="div" image={image} sx={{ pt: '56.25%' }} />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {overview}
        </Typography>

        <Typography variant="button" display="block" mt={2}>
          {popularity}
        </Typography>
      </CardContent>

      <CardActions>
        <Button component={RouterLink} to={`/movies/${id}`} color="secondary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
};
