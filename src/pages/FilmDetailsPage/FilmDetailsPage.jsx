import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { imagePath, fetchMovieDetails } from '../../shared/API/theMovieDb';
import MovieOverview from '../../components/MovieOverview/MovieOverview';

import styles from './filmDetailsPage.module.css';
const FilmDetailsPage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState({});
  const location = useLocation();
  useEffect(() => {
    fetchMovieDetails(id)
      .then(result => {
        const {
          original_title,
          title,
          overview,
          poster_path,
          vote_average,
          release_date,
          name,
          genres,
        } = result;
        const newFilm = {
          name: title ? title : original_title ? original_title : name,
          overview,
          poster_path: imagePath + poster_path,
          vote_average: Math.floor(Number(vote_average) * 10),
          year: release_date.slice(0, 4),
          genres: genres.map(el => el.name).join(' '),
        };
        setFilm(() => newFilm);
      })
      .catch(e => console.log(e.message));
  }, [id]);
  const from = location.state ? location.state.from : '/';
  return (
    <>
     
        <Link className={styles.linkBack} to={from}>
          &#8592;Go Back
        </Link>

        {film?.name && <MovieOverview film={film} />}
        <section className={styles.additional}>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast" state={{ from: from }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ id: id, from: from }}>
                Reviews
              </Link>
            </li>
          </ul>
        </section>
        <Outlet />
     
    </>
  );
};

export default FilmDetailsPage;
