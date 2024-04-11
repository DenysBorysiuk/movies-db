import { connect } from 'react-redux';

import { RootState } from '@/redux/store';
import { Movie } from '@/redux/reducer';
import MovieCard from './MovieCard';

interface Props {
  movies: Movie[];
}

function Movies({ movies }: Props) {
  return (
    <section>
      <div className="Movies-list">
        {movies.map(m => (
          <MovieCard id={m.id} title={m.title} overview={m.overview} popularity={m.popularity} />
        ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
});

const connector = connect(mapStateToProps);

export default connector(Movies);
