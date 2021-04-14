import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import ProductsProvider from "./store/context/ProductsProvider";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
