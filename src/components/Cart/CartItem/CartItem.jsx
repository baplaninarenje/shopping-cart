import { useContext } from 'react';
import { CartDispatchContext } from '../../../contexts/CartContext';
import PropTypes from 'prop-types';
import styles from './CartItem.module.css';

const CartItem = ({
  productId,
  productImage,
  productTitle,
  productPrice,
  productQuantity,
}) => {
  const dispatch = useContext(CartDispatchContext);

  const handleRemoveFromCart = (e) => {
    e.preventDefault();
    dispatch({
      type: 'deleted',
      id: productId,
    });
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
        <p>US ${productPrice}</p>
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
