import styled from "styled-components";
import StarRating from "../../ui/StarRating";

const StyledProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  /* justify-content: center; */
  span {
    font-size: 2rem;
  }
  /* margin */
`;

function ProductRating({ productRating }) {
  return (
    <StyledProductRating>
      <StarRating
        color="#ff8f29"
        defaultRating={productRating}
        maxRating={5}
        size={30}
        messages={["POOR", "AVERAGE", "NICE", "GREAT", "AMAZING"]}
      />
      <span>({Math.floor(Math.random() * (50 - 30) + 30)})</span>
    </StyledProductRating>
  );
}

export default ProductRating;
