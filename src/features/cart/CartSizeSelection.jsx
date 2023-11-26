import { useDispatch } from "react-redux";
import styled from "styled-components";
import { selectItemSize } from "./cartSlice";

const StyledCartSizeSelection = styled.select`
  font-size: 1.8rem;
  padding: 0.44rem 0.8rem;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: white;
  font-weight: 500;
  box-shadow: var(--shadow-sm);

  &:focus {
    outline: 2px solid black;
    outline-offset: -1px;
  }
`;

function CartSizeSelection({ value, id }) {
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(selectItemSize(id, e.target.value));
  }
  return (
    <StyledCartSizeSelection value={value} onChange={handleChange}>
      <option value={"S"}>S</option>
      <option value={"M"}>M</option>
      <option value={"L"}>L</option>
      <option value={"XL"}>XL</option>
      <option value={"XXL"}>XXL</option>
    </StyledCartSizeSelection>
  );
}

export default CartSizeSelection;
