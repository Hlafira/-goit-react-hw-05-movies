import PropTypes from 'prop-types';

import styles from './searchForm.module.css';
const SearchForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input className={styles.input} type="text" name="query" />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
};
