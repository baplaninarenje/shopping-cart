import PropTypes from 'prop-types';

const CategoryItem = ({ categoryImgSrc, categoryName }) => {
  return (
    <>
      <img width={100} src={categoryImgSrc} alt={categoryName} />
      <h3>{categoryName}</h3>
    </>
  );
};

CategoryItem.propTypes = {
  categoryImgSrc: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
};

export default CategoryItem;
