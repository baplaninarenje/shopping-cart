import PropTypes from 'prop-types';
import LinkItem from './LinkItem';

function Links({ linkItems }) {
  return (
    <ul>
      {linkItems.map(({ to, children }) => {
        return (
          <LinkItem key={to} to={to}>
            {children}
          </LinkItem>
        );
      })}
    </ul>
  );
}

Links.propTypes = {
  linkItems: PropTypes.array.isRequired,
};

export default Links;
