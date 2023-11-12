import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Product from "./features/product/Product";
import Cart from "./features/cart/Cart";
import PageNotFound from "./ui/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="product" />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:productId" element={<div>Yoo whaat!</div>} />
          <Route path="cart" element={<Cart />} />
          <Route path="auth" element={<div>Authentication</div>} />
          <Route path="about" element={<div>about</div>} />
          <Route path="faq" element={<div>faq</div>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
