import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../contexts/CartContext';
import styles from './GoToCheckout.module.css';
import stylesProductDetail from './../../Products/ProductDetail/ProductDetail.module.css';

const GoToCheckout = () => {
  const { cartItemsCount, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems
    .reduce(
      (total, product) =>
        total + product.productPrice * product.productQuantity,
      0
    )
    .toFixed(2);

  return (
    <section className={styles.goToCheckout}>
      <p>
        <span>Total Items</span>
        <strong>{cartItemsCount}</strong>
      </p>
      <p>
        <span>Total Price</span>
        <strong>US ${totalPrice}</strong>
      </p>
      <button
        className={stylesProductDetail.addToCart}
        onClick={() => navigate('/checkout')}
      >
        Go to checkout
      </button>
    </section>
  );
};

export default GoToCheckout;
