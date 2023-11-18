import styled from "styled-components";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
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

const SortByFilterWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

function ProductOperations() {
  return (
    <ProductOperationsSection>
      <Wrapper>
        <StyledOperations>
          <p>Categories</p>
          <SortByFilterWrapper>
            <Filter />
            <SortBy />
          </SortByFilterWrapper>
        </StyledOperations>
      </Wrapper>
    </ProductOperationsSection>
  );
}

export default ProductOperations;
