import { useContext, useState } from 'react';
import { ProductsContext } from '../../../contexts/ProductsContext';
import { CartContext } from '../../../contexts/CartContext';

const ProductDetail = () => {
  const [productQuantity, setProductQuantity] = useState(1);
  const { products } = useContext(ProductsContext);
  const { setCartItems } = useContext(CartContext);
  const product = products?.[0];

  const handleAddToCart = (e) => {
    e.preventDefault();
    setCartItems((cartItems) => [
      ...cartItems,
      {
        productTitle: product?.title,
        productPrice: product?.price,
        productImage: product?.image,
        productQuantity,
      },
    ]);
  };

  const handleIncrementProductQuantity = () =>
    setProductQuantity((pq) => pq + 1);

  const handleDecrementProductQuantity = () => {
    if (productQuantity === 1) return;
    setProductQuantity((pq) => pq - 1);
  };

  return (
    <section className="product-detail">
      <img width={100} src={product?.image} alt={product?.title} />
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <p>{product?.description}</p>
      <form onSubmit={handleAddToCart}>
        <label>
          Qty:
          <button
            type="button"
            disabled={productQuantity === 1 ? true : false}
            onClick={handleDecrementProductQuantity}
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={productQuantity}
            onChange={(e) => setProductQuantity(parseInt(e.target.value))}
          />
          <button type="button" onClick={handleIncrementProductQuantity}>
            +
          </button>
        </label>
        <button>Add To Cart</button>
      </form>
    </section>
  );
};

export default ProductDetail;
