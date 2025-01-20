import PropTypes from 'prop-types';
import LinkItem from './LinkItem';

function Links({ linkItems, toggleMenu }) {
  return (
    <ul>
      {linkItems.map(({ to, children }) => {
        return (
          <LinkItem key={to} to={to} toggleMenu={toggleMenu}>
            {children}
          </LinkItem>
        );
      })}
    </ul>
  );
}

Links.propTypes = {
  linkItems: PropTypes.array.isRequired,
  toggleMenu: PropTypes.func,
};

export default Links;
