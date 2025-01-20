import { useEffect, useState } from 'react';
import Links from '../Header/Links/Links';
import CategoryItem from './CategoryItem/CategoryItem';
import { getRequestWithNativeFetch } from '../utils/getRequestWithNativeFetch';
import ErrorPage from '../ErrorPage/ErrorPage';
import NothingFound from '../Products/NothingFound/NothingFound';
import styles from './Home.module.css';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchDataForCategories = async () => {
      try {
        const categoriesData = await getRequestWithNativeFetch(
          'https://fakestoreapi.com/products/categories'
        );
        setCategories(categoriesData);
        setErrorMessage(null);
      } catch (err) {
        setErrorMessage(err.message);
        setCategories(null);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForCategories();
  }, []);

  const linkItems = categories?.map((category) => {
    return {
      to: '/products/category/' + category,
      children: <CategoryItem categoryName={category} />,
    };
  });

  return (
    <div className={styles.home}>
      {loading && <div>Loading categories...</div>}
      {errorMessage && <ErrorPage />}
      {categories.length === 0 && !errorMessage && <NothingFound />}
      {categories.length > 0 && (
        <>
          <h2>Tranding</h2>
          <Links linkItems={linkItems} />
        </>
      )}
    </div>
  );
};

export default Home;
