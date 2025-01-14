import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h2>Explore Popular Categories</h2>
      <nav>
        <ul>
          <li>
            <Link to="/products/electronics">electronics</Link>
          </li>
          <li>
            <Link to="/products/jewelery">jewelery</Link>
          </li>
          <li>
            <Link to="/products/mens-clothing">men&apos;s clothing</Link>
          </li>
          <li>
            <Link to="/products/womens-clothing">women&apos;s clothing</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
