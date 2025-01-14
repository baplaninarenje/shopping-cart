import PropTypes from 'prop-types';

const ProductCard = ({ productImgSrc, title, price }) => {
  return (
    <>
      <img width={100} src={productImgSrc} alt={title} />
      <p>{title}</p>
      <p>${price}</p>
    </>
  );
};

ProductCard.propTypes = {
  productImgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
