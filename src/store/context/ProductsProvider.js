import React, { createContext, useEffect, useReducer } from "react";
import { API_Products } from "../../assets/utils";
import ProductsReducer from "../reducers/ProductsReducer";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
} from "../actions";

const initialState = {
  isLoading: false,
  hasError: false,
  products: [],
  newProducts: [],
  productIsLoading: false,
  productHasError: false,
  product: [],
};

export const ProductsContext = createContext(initialState);

function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    dispatch({ type: GET_PRODUCTS });
    try {
      const response = await fetch(`${API_Products}meissen_products`);
      const products = await response.json();
      if (!response.ok) {
        throw new Error();
      } else {
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
      }
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_FAIL });
    }
  };

  const getProduct = async (id) => {
    dispatch({ type: GET_PRODUCT });
    try {
      const response = await fetch(`${API_Products}meissen_products/${id}`);
      const product = await response.json();
      if (!response.ok) {
        throw new Error();
      } else {
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: product });
      }
    } catch (error) {
      dispatch({ type: GET_PRODUCT_FAIL });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, getProduct }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductProvider;
