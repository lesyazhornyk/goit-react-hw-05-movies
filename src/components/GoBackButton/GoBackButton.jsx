import { Link, useLocation } from 'react-router-dom';

const GoBackButton = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return <Link to={backLinkHref}>Go back</Link>;
};

export default GoBackButton;
