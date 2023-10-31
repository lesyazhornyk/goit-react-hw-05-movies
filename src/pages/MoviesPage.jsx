import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styles from './Searchbar.module.css';
import { Formik, Form, Field } from 'formik';
import { useEffect, useState } from 'react';
import { searchMovies } from 'services/api';
import Loader from 'components/Loader/Loader';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    async function fetchData() {
      setLoading(true);
      try {
        const movies = await searchMovies(query);
        setMovies(movies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query]);

  return (
    <>
      <div className={styles.Searchbar}>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={(values, { resetForm }) => {
            if (!values.search) return;

            setSearchParams({ query: values.search });
            resetForm();
          }}
        >
          <Form className={styles.SearchForm}>
            <button type="submit" className={styles.SearchFormButton}>
              <span className={styles.SearchFormButtonLabel}>Search</span>
            </button>

            <Field
              className={styles.SearchFormInput}
              name="search"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
            />
          </Form>
        </Formik>
      </div>

      {error && <p>Whoops, something went wrong: {error.message}</p>}
      <Loader isLoading={loading} />

      {movies.length > 0 && !loading && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {!movies.length && !error && !loading && query && <p>No movies found.</p>}
    </>
  );
};

export default MoviesPage;
