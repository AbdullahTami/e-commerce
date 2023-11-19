import styled from "styled-components";

const StyledProductDisplaySection = styled.section`
  padding: 4.8rem 3.2rem;
`;

const StyledProductDisplay = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Img = styled.img`
  width: 58.6rem;
  /* height: 700; */
`;

function ProductDisplay({ product }) {
  const { image } = product;
  return (
    <StyledProductDisplaySection>
      <StyledProductDisplay>
        <Img src={image} alt="product-image" />
      </StyledProductDisplay>
    </StyledProductDisplaySection>
  );
}

export default ProductDisplay;
