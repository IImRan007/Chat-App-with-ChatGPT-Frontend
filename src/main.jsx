import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Context
import { UserProvider } from "./context/user/UserContext.jsx";
import { ProductProvider } from "./context/product/ProductContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </UserProvider>
  </BrowserRouter>
);
