import { useEffect, useState } from 'react';
import { fetchPoPularMovies } from '../../shared/API/theMovieDb';
import MoviesList from '../../components/MoviesList/MoviesList';

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchPoPularMovies(1)
      .then(result => {
        setFilms(prevFilms => {
          return result;
        });
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList films={films} />
    </>
  );
};

export default HomePage;
