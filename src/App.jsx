import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./ui/PageNotFound";
import ProtectedRoute from "./ui/ProtectedRoute";
import { Suspense, lazy } from "react";
import SpinnerFullPage from "./ui/SpinnerFullPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const SingleProductPage = lazy(() => import("./pages/SingleProductPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const AuthenticationPage = lazy(() => import("./pages/AuthenticationPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<HomePage />} />
            <Route path="product" element={<ProductsPage />} />
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
      </Suspense>
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
