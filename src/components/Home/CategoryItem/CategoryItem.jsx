import PropTypes from 'prop-types';
import styles from './CategoryItem.module.css';

const getCategoryImgSrc = (categoryName) => {
  switch (categoryName) {
    case 'electronics':
      return 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg';
    case 'jewelery':
      return 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg';
    case "men's clothing":
      return 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';
    case "women's clothing":
      return 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg';

    default:
      return 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg';
  }
};
const CategoryItem = ({ categoryName }) => {
  const categoryImgSrc = getCategoryImgSrc(categoryName);
  return (
    <section className={styles.category}>
      <img
        loading="lazy"
        width={500}
        height={500}
        src={categoryImgSrc}
        alt=""
      />
      <h3>{categoryName}</h3>
    </section>
  );
};

CategoryItem.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default CategoryItem;
