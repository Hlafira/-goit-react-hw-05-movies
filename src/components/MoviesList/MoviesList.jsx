import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ films }) => {
  const location = useLocation();
  const listFilms = films.map(({ id, title }) => (
    <li key={id}>
      <Link
        to={`/movies/${id}`}
        state={{ from: location.pathname + location.search }}
      >
        {title}
      </Link>
    </li>
  ));
  return <ul>{listFilms}</ul>;
};

export default MoviesList;

MoviesList.defaultProps = {
  films: {},
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
