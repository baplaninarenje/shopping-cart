import Cart from './components/Cart/Cart';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import ProductDetail from './components/Products/ProductDetail/ProductDetail';
import Products from './components/Products/Products';

const routes = [
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
  {
    path: '/products/category/:categoryName',
    element: (
      <Layout>
        <Products />
      </Layout>
    ),
  },
  {
    path: '/products/:id',
    element: (
      <Layout>
        <ProductDetail
          productImgSrc="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          title="Rain Jacket Women Windbreaker Striped Climbing Raincoats"
          price={24.99}
          description="Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look."
          quantity={4}
        />
      </Layout>
    ),
  },
  {
    path: '/cart',
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
];

export default routes;
