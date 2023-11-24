// import Container from "../ui/Container";
import styled from "styled-components";
import ProductOperations from "../features/product/ProductOperations";
import ProductsShowcase from "../features/product/ProductsShowcase";
// import Container from "../ui/Container";
// import ProductDescriptionBox from "../features/product/ProductDescriptionBox";

const StyledProductsPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function Products() {
  return (
    <>
      <ProductOperations />
      <ProductsShowcase />
    </>
  );
}

export default Products;
