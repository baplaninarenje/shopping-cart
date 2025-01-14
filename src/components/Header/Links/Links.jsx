import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Links({ cartItemsCount }) {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/cart">
          <span>Cart</span>
          <div className="cart-icon">{cartItemsCount}</div>
        </Link>
      </li>
    </ul>
  );
}

Links.propTypes = {
  cartItemsCount: PropTypes.number.isRequired,
};

export default Links;
