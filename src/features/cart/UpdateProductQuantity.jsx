import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  decreaseItemQuantity,
  getProductQuantityById,
  increaseItemQuantity,
} from "./cartSlice";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  gap: 1rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 2.5rem;
  padding: 0.5rem 1.5rem;
  transition: background-color 0.3s;
  transition: all 0.3s;
  border: none;
  border-radius: 50%;
  background: white;
  color: var(--main-color);
  background: var(--main-color);
  font-weight: 600;
  color: white;
  &:hover {
    background: #ff2626;
  }
  &:active {
    outline: 2px solid var(--main-color);
    outline-offset: -1px;
  }
`;

function UpdateProductQuantity({ productId }) {
  const quantity = useSelector(getProductQuantityById(productId));
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Button onClick={() => dispatch(decreaseItemQuantity(productId))}>
        -
      </Button>
      <span>{quantity}</span>
      <Button onClick={() => dispatch(increaseItemQuantity(productId))}>
        +
      </Button>
    </Wrapper>
  );
}

export default UpdateProductQuantity;
