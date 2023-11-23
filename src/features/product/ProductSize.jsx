import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import {
  clearCart,
  getProduct,
  getProductSizeById,
  increaseItemQuantity,
  selectItemSize,
} from "../cart/cartSlice";
import { useState } from "react";

const StyledProductSize = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  p {
    text-transform: capitalize;
    font-weight: 500;
    font-size: 2.4rem;
    color: var(--grey-500);
  }
`;

const Sizes = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const SizeButton = styled.button`
  display: flex;
  align-items: center;
  /* width: 20rem; */
  background: #fbfbfb;
  border: 1px solid #ebebeb;
  font-size: 2rem;
  padding: 1.8rem 2.4rem;
  font-weight: 500;
  ${(props) =>
    props.$selected &&
    css`
      /* border: 2px solid black; */
      background: var(--grey-200);
    `}
`;

function ProductSize({ sizes, productId }) {
  // const [error, setError] = useState(false);
  // const [selectedSize, setSelectedSize] = useState("");
  const selectedSize = useSelector(getProductSizeById(productId));
  const product = useSelector(getProduct(productId));
  console.log(product);
  //   console.log(sizes);
  const dispatch = useDispatch();

  return (
    <StyledProductSize>
      <p>select size</p>
      <Sizes>
        {sizes.map((size, index) => (
          <SizeButton
            $selected={selectedSize === size.value}
            disabled={selectedSize === size.value}
            key={index}
            // onClick={() => setSelectedSize(size.value)}
            onClick={() => dispatch(selectItemSize(productId, size.value))}
          >
            {size.label}
          </SizeButton>
        ))}
      </Sizes>
    </StyledProductSize>
  );
}

export default ProductSize;
