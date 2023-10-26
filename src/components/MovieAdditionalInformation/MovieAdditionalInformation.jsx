import { Link, useParams } from 'react-router-dom';

const MovieAdditionalInformation = () => {
  const { movieId } = useParams();
  return (
    <div>
      <h4>Additional Information</h4>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default MovieAdditionalInformation;
