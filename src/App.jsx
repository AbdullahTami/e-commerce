import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Product from "./pages/Product";
import Cart from "./features/cart/Cart";
import PageNotFound from "./ui/PageNotFound";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:productId" element={<div>Yoo whaat!</div>} />
          <Route path="cart" element={<Cart />} />
          <Route path="auth" element={<div>Authentication</div>} />
          <Route path="about" element={<div>about</div>} />
          <Route path="faq" element={<div>faq</div>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            // backgroundColor: '',
            // color: '',
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
