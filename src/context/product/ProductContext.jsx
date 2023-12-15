import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
    product: {},
    error: false,
    success: false,
    loading: false,
    message: "",
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  return (
    <ProductContext.Provider
      value={{ stateProduct: state, dispatchProduct: dispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};
