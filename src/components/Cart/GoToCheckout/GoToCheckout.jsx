import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../contexts/CartContext';

const GoToCheckout = () => {
  const { cartItemsCount, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, product) => total + product.productPrice * product.productQuantity,
    0
  );

  return (
    <section className="go-to-checkout">
      <p className="total-items">
        <span>Total Items</span>
        <span>{cartItemsCount}</span>
      </p>
      <p className="total-price">
        <span>Total Price</span>
        <span>US ${totalPrice}</span>
      </p>
      <button onClick={() => navigate('/checkout')}>Go to checkout</button>
    </section>
  );
};

export default GoToCheckout;
