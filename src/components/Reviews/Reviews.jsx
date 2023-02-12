import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchMovieReviews } from '../../shared/API/theMovieDb';
import ReviewList from '../ReviewList/ReviewList';

const Reviews = () => {
  const location = useLocation();

  const { id } = location.state;

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchMovieReviews(id)
      .then(result => {
        const newReviews = result.map(el => ({
          author: el.author,
          content: el.content,
          id: el.id,
        }));
        setReviews(() => newReviews);
      })
      .catch(e => {
        console.log(e);
      });
  }, [id]);
  return (
    <>
      {reviews.length > 0 ? (
        <ReviewList reviews={reviews} />
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
