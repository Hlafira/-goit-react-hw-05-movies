import PropTypes from 'prop-types';
const ReviewList = ({ reviews }) => {
  const elements = reviews.map((el, index) => {
    return (
      <li key={index}>
        <h4>Author:{el.author}</h4>
        <p>{el.content}</p>
      </li>
    );
  });
  return (
    <>
      <ul>{elements}</ul>
    </>
  );
};

export default ReviewList;

ReviewList.defaultProps = {
  reviews: [],
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
