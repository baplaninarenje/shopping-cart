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
  const { id } = useParams();
  if (!isNaN(id) && id.trim() !== '') {
    return (
      <ProductDetail
        productImgSrc="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        title="Rain Jacket Women Windbreaker Striped Climbing Raincoats"
        price={24.99}
        description="Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look."
        quantity={4}
      />
    );
  } else
    return (
      <div className="products">
        <h3>categoryName</h3>
        <Links linkItems={linkItems} />
      </div>
    );
};

export default Products;
