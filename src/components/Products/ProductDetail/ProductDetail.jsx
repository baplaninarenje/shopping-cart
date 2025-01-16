import { useContext, useState } from 'react';
import { ProductsContext } from '../../../contexts/ProductsContext';
import { CartContext } from '../../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const [productQuantity, setProductQuantity] = useState(1);
  const { products } = useContext(ProductsContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const product = products?.[0];

  const cartContainsProductId = cartItems.some(
    (cartItem) => cartItem.productId === product.id
  );

  const handleAddToCart = (e) => {
    e.preventDefault();
    navigate('/cart');
    if (cartContainsProductId) return;
    setCartItems((cartItems) => [
      ...cartItems,
      {
        productId: product?.id,
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
        <button>{cartContainsProductId ? 'See in cart' : 'Add To Cart'}</button>
      </form>
    </section>
  );
};

export default ProductDetail;
