import { useEffect, useState } from 'react';
import Links from '../Header/Links/Links';
import CategoryItem from './CategoryItem/CategoryItem';
import { getRequestWithNativeFetch } from '../getRequestWithNativeFetch';
import ErrorPage from '../ErrorPage/ErrorPage';

const Home = () => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

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
      children: (
        <CategoryItem
          categoryImgSrc="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
          categoryName={category}
        />
      ),
    };
  });

  return (
    <div className="home">
      {loading && <div>Loading categories...</div>}
      {errorMessage && <ErrorPage />}
      {categories && (
        <>
          <h2>Explore Popular Categories</h2>
          <Links linkItems={linkItems} />
        </>
      )}
    </div>
  );
};

export default Home;
