import PropTypes from 'prop-types';

const ProductDetail = ({
  productImgSrc,
  title,
  price,
  description,
  quantity,
}) => {
  return (
    <section>
      <img width={100} src={productImgSrc} alt={title} />
      <p>{title}</p>
      <p>${price}</p>
      <p>{description}</p>
      <div>
        <button>-</button>
        <label>
          Qty: <input type="number" value={quantity} min="1" />
        </label>
        <button>+</button>
      </div>
      <button>Add To Cart</button>
    </section>
  );
};

ProductDetail.propTypes = {
  productImgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ProductDetail;
