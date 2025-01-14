import Links from '../Header/Links/Links';

const linkItems = [
  {
    to: '/products/electronics',
    children: 'electronics',
  },
  {
    to: '/products/jewelery',
    children: 'jewelery',
  },
  {
    to: '/products/mens-clothing',
    children: 'men&apos;s clothing',
  },
  {
    to: '/products/womens-clothing',
    children: 'women&apos;s clothing',
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
