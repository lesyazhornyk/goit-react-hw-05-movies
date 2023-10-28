import Cast from 'components/Cast/Cast';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import MovieAdditionalInformation from 'components/MovieAdditionalInformation/MovieAdditionalInformation';
import MovieContent from 'components/MovieContent/MovieContent';
import Reviews from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';

export default function MovieDetailsPage({ cast, reviews }) {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState();

  useEffect(() => {
    if (!movieId) return;
    async function getMovieDetails() {
      try {
        const movie = await fetchMovieById(movieId);
        setMovieDetails(movie);
      } catch (error) {}
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      <GoBackButton />
      {movieDetails && (
        <>
          <MovieContent movie={movieDetails} />
          <hr />
          <MovieAdditionalInformation />
          <hr />
          {cast && <Cast />}
          {reviews && <Reviews />}
        </>
      )}
    </div>
  );
}
