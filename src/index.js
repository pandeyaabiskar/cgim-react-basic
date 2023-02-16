import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductProvider from "./context/ProductContext";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ProductProvider>
          <App />
        </ProductProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
