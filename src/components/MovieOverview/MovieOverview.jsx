import PropTypes from 'prop-types';
import styles from './movieOverview.module.css';

const MovieOverview = ({ film }) => {
  return (
    <section className={styles.filmContainer}>
      <img src={film.poster_path} alt="Poster" />
      <div className={styles.about}>
        <h2>
          {film.name}({film.year})
        </h2>
        <p>User score: {film.vote_average}%</p>
        <h3>Overview</h3>
        <p>{film.overview}</p>
        <h3>Genres</h3>
        <p>{film.genres}</p>
      </div>
    </section>
  );
};

export default MovieOverview;

MovieOverview.defaultProps = {
  film: {},
};

MovieOverview.propTypes = {
  film: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    name: PropTypes.string,
    yea: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.string,
  }),
};
