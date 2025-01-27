export default function cartItemsReducer(cartItems, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...cartItems,
        {
          productId: action?.productId,
          productTitle: action?.productTitle,
          productPrice: action?.productPrice,
          productImage: action?.productImage,
          productQuantity: action.productQuantity,
        },
      ];
    }
    case 'deleted': {
      return cartItems.filter((cartItem) => cartItem.productId !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
