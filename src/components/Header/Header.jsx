import Links from './Links/Links';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

function Header() {
  const { cartItemsCount } = useContext(CartContext);

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
      <h1>Very Awesome Shop</h1>
      <nav>
        <Links linkItems={linkItems} />
      </nav>
    </header>
  );
}

export default Header;
