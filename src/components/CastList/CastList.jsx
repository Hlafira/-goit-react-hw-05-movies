import PropTypes from 'prop-types';
import styles from './castList.module.css';

const CastList = ({ actors }) => {
  const elements = actors.map(el => {
    return (
      <li key={el.id}>
        <img src={el.profile_path} alt={el.name} width="128" />
        <h4>{el.name}</h4>
        <h4>Character : {el.character}</h4>
      </li>
    );
  });
  return (
    <>
      <ul className={styles.list}>{elements}</ul>
    </>
  );
};

export default CastList;

CastList.defaultProps = {
  actors: [],
};

CastList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
