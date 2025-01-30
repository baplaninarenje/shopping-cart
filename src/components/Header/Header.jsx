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
        <div className={styles.cartContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(17, 24, 32)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-cart"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className={styles.cartIcon}>{cartItemsCount}</span>
        </div>
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
