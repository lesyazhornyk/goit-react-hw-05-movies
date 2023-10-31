import { useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const MovieAdditionalInformation = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const locationRef = useRef(location.state?.from ?? '/');

  return (
    <div>
      <h4>Additional Information</h4>
      <ul>
        <li>
          <Link
            to={`/movies/${movieId}/cast`}
            state={{ from: locationRef.current }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={`/movies/${movieId}/reviews`}
            state={{ from: locationRef.current }}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MovieAdditionalInformation;
