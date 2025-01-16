import { createContext } from 'react';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => [],
  loading: true,
  setLoading: () => true,
  errorMessage: '',
  setErrorMessage: () => '',
});
