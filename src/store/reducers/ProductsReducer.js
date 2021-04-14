import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
} from "../actions";

const ProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, isLoading: true };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        newProducts: action.payload.filter((product) => product.year === 2021),
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case GET_PRODUCT:
      return { ...state, productIsLoading: true, productHasError: false };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        productIsLoading: false,
        product: action.payload,
      };
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        productIsLoading: false,
        productHasError: true,
      };
    default:
      return state;
  }
};

export default ProductsReducer;
