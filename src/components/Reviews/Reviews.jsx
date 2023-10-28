import ReviewContent from 'components/ReviewContent/ReviewContent';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsByMovieId } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    async function fetchData() {
      setLoading(true);
      try {
        const reviewsResponse = await fetchReviewsByMovieId(movieId);
        setReviews(reviewsResponse);
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

      {reviews.length > 0 && !loading && (
        <ul>
          {reviews.map(review => (
            <ReviewContent key={review.id} review={review} />
          ))}
        </ul>
      )}
      {!reviews.length && !loading && !error && (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
