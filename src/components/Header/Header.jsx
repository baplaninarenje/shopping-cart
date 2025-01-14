import PropTypes from 'prop-types';
import Links from './Links/Links';

function Header({ cartItemsCount }) {
  return (
    <header>
      <h1>Very Awsome Shop</h1>
      <nav>
        <Links cartItemsCount={cartItemsCount} />
      </nav>
    </header>
  );
}

Header.propTypes = {
  cartItemsCount: PropTypes.number.isRequired,
};

export default Header;
