import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";
import Cart from "./cart/Cart";
import { Landing } from "./landing";
import { Product } from "./product";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/category/:category/product/:productId"
          element={<Product />}
        />
        <Route path="checkout" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
