import Links from './Links/Links';
import { CartContext } from '../../contexts/CartContext';
import { useContext, useState } from 'react';
import Hamburger from './Hamburger/Hamburger';
import styles from './Header.module.css';

function Header() {
  const { cartItemsCount } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <span className={styles.cartIcon}>{cartItemsCount}</span>
        </>
      ),
    },
  ];
  return (
    <header>
      <h1>Demo Shop</h1>
      <Hamburger toggleMenu={toggleMenu} />
      {isMenuOpen && (
        <nav className={styles.menuMobile}>
          <button
            className={styles.closeBtn}
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            &#10006;
          </button>
          <Links linkItems={linkItems} toggleMenu={toggleMenu} />
        </nav>
      )}
      <nav className={styles.menuDesktop}>
        <Links linkItems={linkItems} />
      </nav>
    </header>
  );
}

export default Header;
