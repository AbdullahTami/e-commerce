import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Products from "./pages/Products";
import Cart from "./features/cart/Cart";
import PageNotFound from "./ui/PageNotFound";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import AuthenticationPage from "./pages/AuthenticationPage";
import ProtectedRoute from "./ui/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="product" element={<Products />} />
          <Route path="product/:productId" element={<SingleProductPage />} />
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route path="auth" element={<AuthenticationPage />} />
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
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
