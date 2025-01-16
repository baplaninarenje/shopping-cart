import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/ProductsContext';

const ProductDetail = () => {
  const { products: product } = useContext(ProductsContext);

  return (
    <section>
      <img width={100} src={product?.image} alt={product?.title} />
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <p>{product?.description}</p>
      <div>
        <button>-</button>
        <label>
          Qty: <input type="number" value={1} min="1" />
        </label>
        <button>+</button>
      </div>
      <button>Add To Cart</button>
    </section>
  );
};

export default ProductDetail;
