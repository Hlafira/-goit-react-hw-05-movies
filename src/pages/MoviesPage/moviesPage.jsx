import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchSearchMovies } from '../../shared/API/theMovieDb';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [films, setFilms] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  useEffect(() => {
    if (query) {
      fetchSearchMovies(query, 1)
        .then(result => {
          setFilms(prevFilms => {
            return [...result];
          });
        })
        .catch(e => {
          console.log(e.message);
        });
    }
  }, [query]);

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      <MoviesList films={films} />
    </>
  );
};

export default MoviesPage;
