import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section className="error-page">
      <h2>
        {error?.message ||
          error?.data ||
          'Something went wrong. Please try again later.'}
      </h2>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </section>
  );
};

export default ErrorPage;
