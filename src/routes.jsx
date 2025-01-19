import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout/Checkout';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import ProductDetail from './components/Products/ProductDetail/ProductDetail';
import Products from './components/Products/Products';

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
    children: [
      { path: '', element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/category/:categoryName', element: <Products /> },
      { path: 'products/:id', element: <ProductDetail /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
    ],
  },
];

export default routes;
