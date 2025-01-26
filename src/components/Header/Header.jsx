import Links from './Links/Links';
import { CartContext } from '../../contexts/CartContext';
import { useContext, useState } from 'react';
import Hamburger from './Hamburger/Hamburger';
import mainLogo from './../../assets/anti-sns.jpeg';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

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
      <Link to="/">
        <h1>
          <span>Anti -</span>
          <img
            className={styles.mainLogo}
            width={76}
            height={50}
            src={mainLogo}
            alt="Anti-SNS Shop Logo"
          />
          <span className={styles.antiSnsShopText}>Shop</span>
        </h1>
      </Link>
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
