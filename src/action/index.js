import {ADD_CART} from "./type"

export const setAddCart = (data) => {
    return {
      type: ADD_CART,
      data
    };
  };