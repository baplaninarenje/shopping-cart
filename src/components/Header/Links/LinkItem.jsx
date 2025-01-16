import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { getRequestWithNativeFetch } from '../../getRequestWithNativeFetch';
import { ProductsContext } from '../../../contexts/ProductsContext';

const baseUrl = 'https://fakestoreapi.com';

const LinkItem = ({ to, children }) => {
  const { setProducts, setLoading, setErrorMessage } =
    useContext(ProductsContext);

  const fetchDataForProducts = async (dynamicPathParam) => {
    try {
      const productsData = await getRequestWithNativeFetch(
        baseUrl + dynamicPathParam
      );
      setProducts(Array.isArray(productsData) ? productsData : [productsData]);
      setErrorMessage('');
    } catch (err) {
      setErrorMessage(err.message);
      setProducts([]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  function handleClick() {
    if (!to.includes('products')) return;
    fetchDataForProducts(to);
  }

  return (
    <li onClick={handleClick}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

LinkItem.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
};

export default LinkItem;
