import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import PropTypes from 'prop-types';
import styles from './CartItem.module.css';

const CartItem = ({
  productId,
  productImage,
  productTitle,
  productPrice,
  productQuantity,
}) => {
  const { setCartItems } = useContext(CartContext);

  const handleRemoveFromCart = (e) => {
    e.preventDefault();
    setCartItems((cartItems) =>
      cartItems.filter((cartItem) => cartItem.productId !== productId)
    );
  };

  return (
    <section className={styles.cartItem}>
      <img
        loading="lazy"
        width={500}
        height={500}
        src={productImage}
        alt={productTitle}
      />
      <div className={styles.cartItemText}>
        <h4>{productTitle}</h4>
        <p>${productPrice}</p>
        <p>Qty: {productQuantity}</p>
        <button onClick={handleRemoveFromCart} className={styles.fakeLink}>
          Remove
        </button>
      </div>
    </section>
  );
};

CartItem.propTypes = {
  productId: PropTypes.number.isRequired,
  productImage: PropTypes.string.isRequired,
  productTitle: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  productQuantity: PropTypes.number.isRequired,
};

export default CartItem;
