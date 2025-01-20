import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkItem = ({ to, children, toggleMenu }) => {
  return (
    <li onClick={toggleMenu}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

LinkItem.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func,
};

export default LinkItem;
