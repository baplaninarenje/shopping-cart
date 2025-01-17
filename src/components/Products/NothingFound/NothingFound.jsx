import { Link } from 'react-router-dom';

const NothingFound = () => {
  return (
    <section className="nothing-found">
      <h2>We looked everywhere.</h2>
      <p>It looks like this page is missing, or there are no search results.</p>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </section>
  );
};

export default NothingFound;
