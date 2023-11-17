// import Container from "../ui/Container";
import styled from "styled-components";
import ProductOperations from "../features/product/ProductOperations";
import ProductsShowcase from "../features/product/ProductsShowcase";
import Container from "../ui/Container";

const StyledProductPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function Product() {
  return (
    <>
      <ProductOperations />
      <ProductsShowcase />
    </>
  );
}

export default Product;
