import styled from "styled-components";
import Filter from "../../ui/Filter";

const ProductOperationsSection = styled.section`
  padding: 8.6rem 3.2rem;
`;

const StyledOperations = styled.div`
  /* padding: 0 3.2rem; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function ProductOperations() {
  return (
    <ProductOperationsSection>
      <StyledOperations>
        <h1>Categories</h1>
        <Filter />
      </StyledOperations>
    </ProductOperationsSection>
  );
}

export default ProductOperations;
