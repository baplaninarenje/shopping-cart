import PropTypes from 'prop-types';
import Links from './Links/Links';

function Header({ cartItemsCount }) {
  const linkItems = [
    {
      to: '/',
      children: 'Home',
    },
    {
      to: '/products',
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
      <Links linkItems={linkItems} />
    </header>
  );
}

Header.propTypes = {
  cartItemsCount: PropTypes.number.isRequired,
};

export default Header;
