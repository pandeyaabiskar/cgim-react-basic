import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductProvider from "./context/ProductContext";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ProductProvider>
        <App />
      </ProductProvider>
    </ThemeProvider>
  </React.StrictMode>
);
