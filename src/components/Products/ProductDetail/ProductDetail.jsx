import { useContext, useState } from 'react';
import { ProductsContext } from '../../../contexts/ProductsContext';
import {
  CartContext,
  CartDispatchContext,
} from '../../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import ErrorPage from '../../ErrorPage/ErrorPage';
import NothingFound from '../NothingFound/NothingFound';
import styles from './ProductDetail.module.css';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const ProductDetail = () => {
  const [productQuantity, setProductQuantity] = useState(1);
  const [error, setError] = useState('');
  const { products, loading, errorMessage } = useContext(ProductsContext);
  const { cartItems } = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);

  const navigate = useNavigate();

  const product = products?.[0];

  const cartContainsProductId = cartItems.some(
    (cartItem) => cartItem.productId === product.id
  );

  const handleAddToCart = (e) => {
    e.preventDefault();

    if (!productQuantity || isNaN(productQuantity) || productQuantity < 1) {
      setError('Quantity must be a number 1 or greater and must not be empty.');
      return;
    }

    setError('');
    navigate('/cart');
    if (cartContainsProductId) return;
    dispatch({
      type: 'added',
      productId: product?.id,
      productTitle: product?.title,
      productPrice: product?.price,
      productImage: product?.image,
      productQuantity,
    });
  };

  const handleIncrementProductQuantity = () => {
    setProductQuantity((pq) => pq + 1);
    setError('');
  };

  const handleDecrementProductQuantity = () => {
    if (productQuantity === 1) return;
    setProductQuantity((pq) => pq - 1);
    setError('');
  };

  return (
    <section className={styles.productDetail}>
      {loading && <LoadingSpinner />}
      {errorMessage && <ErrorPage />}
      {products.length === 0 && !errorMessage && <NothingFound />}
      {products.length > 0 && (
        <>
          <img
            width={500}
            height={500}
            src={product?.image}
            alt={product?.title}
          />
          <section className={styles.productInfo}>
            <h3>{product?.title}</h3>
            <p className={styles.price}>US ${product?.price}</p>
            <p>{product?.description}</p>
            <form onSubmit={handleAddToCart}>
              <section className={styles.quantity}>
                <label htmlFor="quantityInput">Quantity:</label>
                <button
                  className={styles.minus}
                  type="button"
                  disabled={productQuantity < 2}
                  onClick={handleDecrementProductQuantity}
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantityInput"
                  min="1"
                  value={productQuantity}
                  onChange={(e) => setProductQuantity(parseInt(e.target.value))}
                />
                <button
                  type="button"
                  onClick={handleIncrementProductQuantity}
                  className={styles.plus}
                >
                  +
                </button>
              </section>
              {error && <p className={styles.error}>{error}</p>}
              <button className={styles.addToCart}>
                {cartContainsProductId ? 'See in cart' : 'Add To Cart'}
              </button>
            </form>
          </section>
        </>
      )}
    </section>
  );
};

export default ProductDetail;
