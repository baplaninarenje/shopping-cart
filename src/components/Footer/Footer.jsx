import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <Link
        to="https://spdx.org/licenses/Beerware.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        &#127866; 2025 Stefan Ljiljak. All rights reserved.
      </Link>
    </footer>
  );
}

export default Footer;
