import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../contexts/ProductsContext';
import ErrorPage from '../ErrorPage/ErrorPage';
import Links from '../Header/Links/Links';
import ProductCard from './ProductCard/ProductCard';
import { useContext } from 'react';

const Products = () => {
  const { categoryName } = useParams();
  const { products, loading, errorMessage } = useContext(ProductsContext);
  const linkItems = products?.map((product) => {
    return {
      to: '/products/' + product?.id,
      children: (
        <ProductCard
          productImgSrc={product?.image}
          title={product?.title}
          price={product?.price}
        />
      ),
    };
  });

  return (
    <div className="products">
      {loading && <div>Loading products...</div>}
      {errorMessage && <ErrorPage />}
      {products && (
        <>
          <h3>{categoryName || 'All Products'}</h3>
          <Links linkItems={linkItems} />
        </>
      )}
    </div>
  );
};

export default Products;
