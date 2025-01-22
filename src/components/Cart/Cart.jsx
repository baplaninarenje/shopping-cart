import CartItem from './CartItem/CartItem';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
import Links from '../Header/Links/Links';
import GoToCheckout from './GoToCheckout/GoToCheckout';
import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const linkItems = cartItems.map(
    ({
      productId,
      productImage,
      productTitle,
      productPrice,
      productQuantity,
    }) => {
      return {
        to: '/products/' + productId,
        children: (
          <CartItem
            productId={productId}
            productImage={productImage}
            productTitle={productTitle}
            productPrice={productPrice}
            productQuantity={productQuantity}
          />
        ),
      };
    }
  );

  return (
    <div className={styles.cart}>
      <h3>Shopping cart</h3>
      <Links linkItems={linkItems} />
      {linkItems.length ? (
        <GoToCheckout />
      ) : (
        <>
          <br></br>
          <p>No items.</p>
        </>
      )}
    </div>
  );
};

export default Cart;
