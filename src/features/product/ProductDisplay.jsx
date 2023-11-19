import styled from "styled-components";
import StarRating from "../../ui/StarRating";

const StyledProductDisplaySection = styled.section`
  padding: 4.8rem 3.2rem;
`;

const StyledProductDisplay = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4.8rem;
`;

const Img = styled.img`
  width: 58.6rem;
  /* height: 700; */
`;

const ProductDetails = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  & h1:first-child {
    color: #3d3d3d;
    font-size: 3.6rem;
    font-weight: 500;
  }
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  /* justify-content: center; */
  span {
    font-size: 2rem;
  }
  /* margin */
`;

function ProductDisplay({ product }) {
  const { image, name, productRating } = product;
  return (
    <StyledProductDisplaySection>
      <StyledProductDisplay>
        <Img src={image} alt="product-image" />
        <ProductDetails>
          <h1>{name}</h1>
          <ProductRating>
            <StarRating
              color="#ff8f29"
              defaultRating={productRating}
              maxRating={5}
              size={30}
              messages={["POOR", "AVERAGE", "NICE", "GREAT", "AMAZING"]}
            />
            <span>({Math.floor(Math.random() * (50 - 30) + 30)})</span>
          </ProductRating>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </ProductDetails>
      </StyledProductDisplay>
    </StyledProductDisplaySection>
  );
}

export default ProductDisplay;
