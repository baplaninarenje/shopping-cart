import PropTypes from 'prop-types';
import Header from './../Header/Header.jsx';
import Footer from './../Footer/Footer.jsx';
import { ProductsContext } from '../../contexts/ProductsContext.js';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getRequestWithNativeFetch } from '../getRequestWithNativeFetch.js';

const baseUrl = 'https://fakestoreapi.com';

function Layout({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.includes('products')) return;
    const fetchDataForProducts = async (dynamicPathParam) => {
      try {
        const productsData = await getRequestWithNativeFetch(
          baseUrl + dynamicPathParam
        );
        setProducts(
          Array.isArray(productsData) ? productsData : [productsData]
        );
        setErrorMessage('');
      } catch (err) {
        setErrorMessage(err.message);
        setProducts([]);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDataForProducts(pathname);
  }, [pathname]);

  return (
    <>
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
        <Header cartItemsCount={1} />
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
