const MovieContent = ({ movie }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : defaultImg;

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <img
        src={image}
        alt="poster"
        width={250}
        style={{
          margin: '10px 10px 0 0',
        }}
      />
      <div>
        <h3>
          {movie.original_title} ({movie.release_date})
        </h3>
        <p>Popularity: {movie.popularity}</p>
        <h4>Overview</h4>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
      </div>
    </div>
  );
};

export default MovieContent;
