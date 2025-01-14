import Links from '../Header/Links/Links';
import CategoryItem from './CategoryItem/CategoryItem';

const linkItems = [
  {
    to: '/products/electronics',
    children: (
      <CategoryItem
        categoryImgSrc="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
        categoryName="electronics"
      />
    ),
  },
  {
    to: '/products/jewelery',
    children: (
      <CategoryItem
        categoryImgSrc="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
        categoryName="jewelery"
      />
    ),
  },
  {
    to: '/products/mens-clothing',
    children: (
      <CategoryItem
        categoryImgSrc="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        categoryName="men's clothing"
      />
    ),
  },
  {
    to: '/products/womens-clothing',
    children: (
      <CategoryItem
        categoryImgSrc="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
        categoryName="women's clothing"
      />
    ),
  },
];

const Home = () => {
  return (
    <>
      <h2>Explore Popular Categories</h2>
      <Links linkItems={linkItems} />
    </>
  );
};

export default Home;
