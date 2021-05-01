import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actions";

const CartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
      return { ...state, isLoading: true };
      default:
        return state;}