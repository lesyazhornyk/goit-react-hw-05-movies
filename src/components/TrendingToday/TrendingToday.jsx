import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { fetchTradingToday } from 'services/api';
import { Link } from 'react-router-dom';

export default function TrendingToday() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const movies = await fetchTradingToday();
        setMovies(movies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      <Loader isLoading={loading} />

      {movies.length > 0 && !loading && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
