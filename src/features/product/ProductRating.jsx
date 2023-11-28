import styled from "styled-components";
import StarRating from "../../ui/StarRating";
import { useState } from "react";

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

function ProductRating({ reviews, productRating }) {
  const [rating, setRating] = useState("");
  return (
    <StyledProductRating>
      <StarRating
        onSetRating={setRating}
        color="#ff8f29"
        defaultRating={productRating}
        maxRating={5}
        size={30}
        messages={["POOR", "AVERAGE", "NICE", "GREAT", "AMAZING"]}
      />
      <span>({Math.floor(reviews * 3) + Boolean(rating)} ratings)</span>
    </StyledProductRating>
  );
}

export default ProductRating;
