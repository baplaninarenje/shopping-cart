import Cart from './components/Cart/Cart';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
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
    path: '/products/:id',
    element: (
      <Layout>
        <Products />
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
