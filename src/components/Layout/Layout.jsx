import PropTypes from 'prop-types';
import Header from './../Header/Header.jsx';
import Footer from './../Footer/Footer.jsx';
import { ProductsContext } from '../../contexts/ProductsContext.js';
import { useState } from 'react';

function Layout({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <>
      <Header cartItemsCount={1} />
      <ProductsContext.Provider
        value={{
          products,
          setProducts,
          loading,
          setLoading,
          errorMessage,
          setErrorMessage,
        }}
      >
        <main>{children}</main>
      </ProductsContext.Provider>

      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
