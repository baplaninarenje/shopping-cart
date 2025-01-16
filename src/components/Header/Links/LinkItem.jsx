import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkItem = ({ to, children }) => {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
};

LinkItem.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
};

export default LinkItem;
