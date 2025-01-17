import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import PropTypes from 'prop-types';

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
    <>
      <img width={100} src={productImage} alt={productTitle} />
      <p>{productTitle}</p>
      <p>${productPrice}</p>
      <p>Qty: {productQuantity}</p>
      <button onClick={handleRemoveFromCart}>Remove</button>
    </>
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
