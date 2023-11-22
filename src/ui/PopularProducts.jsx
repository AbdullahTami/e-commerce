import styled from "styled-components";
import Container from "./Container";
import popular_products from "../assets/data";
import ProductItem from "../features/product/ProductItem";

const StyledPopularSection = styled.section`
  padding: 12.8rem 3.2rem;
`;

const StyledPopular = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  h1 {
    /* text-decoration: italic; */
    cursor: pointer;
    font-style: italic;
    color: var(--grey-900);
    font-weight: 500;
    text-transform: capitalize;
    font-size: 4.4rem;
  }
`;

const StyledPopularItems = styled.div`
  padding: 3.2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
`;

function PopularProducts() {
  return (
    <StyledPopularSection>
      <Container>
        <StyledPopular>
          <h1>#PopularInWomen</h1>
          <StyledPopularItems>
            {popular_products.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </StyledPopularItems>
        </StyledPopular>
      </Container>
    </StyledPopularSection>
  );
}

export default PopularProducts;
