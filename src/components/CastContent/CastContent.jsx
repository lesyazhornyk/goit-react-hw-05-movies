const CastContent = ({ cast }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const image = cast.profile_path
    ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
    : defaultImg;

  return (
    <li>
      <img src={image} alt="cast" width={100} />
      <p>{cast.name}</p>
      <p>Character: {cast.character}</p>
    </li>
  );
};

export default CastContent;
