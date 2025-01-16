import { createContext } from 'react';

export const ProductsContext = createContext({
  products: null,
  setProducts: () => {},
  loading: true,
  setLoading: () => {},
  errorMessage: null,
  setErrorMessage: () => {},
});
