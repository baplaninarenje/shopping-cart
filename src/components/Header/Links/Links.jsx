import PropTypes from 'prop-types';
import LinkItem from './LinkItem';

function Links({ linkItems }) {
  return (
    <nav>
      <ul>
        {linkItems.map(({ to, children }) => {
          return (
            <LinkItem key={to} to={to}>
              {children}
            </LinkItem>
          );
        })}
      </ul>
    </nav>
  );
}

Links.propTypes = {
  linkItems: PropTypes.array.isRequired,
};

export default Links;
