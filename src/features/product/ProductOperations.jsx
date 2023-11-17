import styled from "styled-components";
import Filter from "../../ui/Filter";
// import Container from "../../ui/Container";

const ProductOperationsSection = styled.section`
  padding: 8.6rem 3.2rem;
`;

const StyledOperations = styled.div`
  /* padding: 0 3.2rem; */
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 3rem;
  font-weight: 500;
`;
const Wrapper = styled.div`
  max-width: 146rem;
  margin: 0 auto;
`;

function ProductOperations() {
  return (
    <ProductOperationsSection>
      <Wrapper>
        <StyledOperations>
          <p>Categories</p>
          <Filter />
        </StyledOperations>
      </Wrapper>
    </ProductOperationsSection>
  );
}

export default ProductOperations;
