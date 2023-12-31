// import Container from "../ui/Container";
import styled from "styled-components";
import ProductOperations from "./ProductOperations";
import ProductsShowcase from "./ProductsShowcase";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../ui/LoadingSpinner";

function Products() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <ProductOperations />
      <ProductsShowcase />
    </>
  );
}

export default Products;
