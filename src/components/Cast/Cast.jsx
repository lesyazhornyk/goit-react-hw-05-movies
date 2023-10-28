import CastContent from 'components/CastContent/CastContent';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreditsByMovieId } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    async function fetchData() {
      setLoading(true);
      try {
        const credits = await fetchCreditsByMovieId(movieId);
        setCasts(credits);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      <Loader isLoading={loading} />

      {casts.length > 0 && !loading && (
        <ul>
          {casts.map(cast => (
            <CastContent key={cast.id} cast={cast} />
          ))}
        </ul>
      )}
      {!casts.length && !loading && !error && (<p>We don't have any cast for this movie.</p>)}
    </>
  );
};

export default Cast;
