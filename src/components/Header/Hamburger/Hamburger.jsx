import styles from './Hamburger.module.css';
import PropTypes from 'prop-types';

const Hamburger = ({ toggleMenu }) => {
  return (
    <button className={styles.hamburger} onClick={toggleMenu}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
};

Hamburger.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Hamburger;
