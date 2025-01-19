import PropTypes from 'prop-types';
import Header from './../Header/Header.jsx';
import Footer from './../Footer/Footer.jsx';
import { ProductsContext } from '../../contexts/ProductsContext.js';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { getRequestWithNativeFetch } from '../utils/getRequestWithNativeFetch.js';
import { CartContext } from '../../contexts/CartContext.js';
import styles from './Layout.module.css';

const baseUrl = 'https://fakestoreapi.com';

function Layout({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const { pathname } = useLocation();

  const cartItemsCount = cartItems.reduce(
    (total, product) => total + product.productQuantity,
    0
  );

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
    <div className={styles.layout}>
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
        <CartContext.Provider
          value={{ cartItems, setCartItems, cartItemsCount }}
        >
          <Header />
          <main>{children ?? <Outlet />}</main>
        </CartContext.Provider>
      </ProductsContext.Provider>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
