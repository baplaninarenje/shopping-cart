import PropTypes from 'prop-types';
import styles from './ProductCard.module.css';

const ProductCard = ({ productImgSrc, title, price }) => {
  return (
    <section className={styles.productCard}>
      <img width={500} height={500} src={productImgSrc} alt={title} />
      <div className={styles.productCardText}>
        <p>{title}</p>
        <p>US ${price}</p>
      </div>
    </section>
  );
};

ProductCard.propTypes = {
  productImgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
