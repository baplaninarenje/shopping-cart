import Links from '../Header/Links/Links';
import ProductCard from './ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail/ProductDetail';

const linkItems = [
  {
    to: '/products/1',
    children: (
      <ProductCard
        productImgSrc="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        title="men's clothing"
        price={24.99}
      />
    ),
  },
  {
    to: '/products/2',
    children: (
      <ProductCard
        productImgSrc="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        title="men's clothing"
        price={24.99}
      />
    ),
  },
  {
    to: '/products/3',
    children: (
      <ProductCard
        productImgSrc="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        title="men's clothing"
        price={24.99}
      />
    ),
  },
];

const Products = () => {
  const { categoryName } = useParams();
  console.log(categoryName);

  return (
    <div className="products">
      <h3>categoryName</h3>
      <Links linkItems={linkItems} />
    </div>
  );
};

export default Products;
