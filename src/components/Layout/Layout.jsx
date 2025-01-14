import PropTypes from 'prop-types';
import Header from './../Header/Header.jsx';
import Footer from './../Footer/Footer.jsx';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
