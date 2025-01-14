import PropTypes from 'prop-types';
import Links from './Links/Links';

function Header({ cartItemsCount }) {
  const linkItems = [
    {
      to: '/',
      children: 'Home',
    },
    {
      to: '/products/all',
      children: 'Products',
    },
    {
      to: '/cart',
      children: (
        <>
          <span>Cart</span>
          <div className="cart-icon">{cartItemsCount}</div>
        </>
      ),
    },
  ];
  return (
    <header>
      <h1>Very Awsome Shop</h1>
      <nav>
        <Links linkItems={linkItems} />
      </nav>
    </header>
  );
}

Header.propTypes = {
  cartItemsCount: PropTypes.number.isRequired,
};

export default Header;
