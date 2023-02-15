import { useParams } from 'react-router-dom';
import { imageSmallPath, fetchMovieCredits } from '../../shared/API/theMovieDb';
import { useEffect, useState } from 'react';

import CastList from '../../components/CastList/CastList';
const CastPage = () => {
  const { id } = useParams();
  const [actors, setActors] = useState([]);
  useEffect(() => {
    fetchMovieCredits(id)
      .then(result => {
        const newActors = result.map(
          ({ credit_id, character, name, profile_path }) => ({
            id: credit_id,
            character,
            name,
            profile_path: profile_path
              ? imageSmallPath + profile_path
              : 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg',
          })
        );

        setActors(() => newActors);
      })
      .catch(e => {
        console.log(e);
      });
  }, [id]);
  return (
    <>
      {actors.length > 0 ? (
        <CastList actors={actors} />
      ) : (
        <p>We don't have any information about actors for this movie</p>
      )}
    </>
  );
};

export default CastPage;
