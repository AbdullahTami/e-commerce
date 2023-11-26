import { BsDashLg } from "react-icons/bs";
import styled, { keyframes } from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteItem } from "./cartSlice";
import { useDispatch } from "react-redux";

const StyledCartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 0.5fr;
  column-gap: 4rem;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 1rem 0;

  img {
    width: 8rem;
  }
  div:not(:nth-child(2)) {
    text-align: center;
  }
  & svg {
    transition: all 0.3s;
    color: var(--grey-500);
    &:hover,
    &:active {
      color: black;
    }
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(20deg);
  }
  50% {
    transform: rotate(-20deg);
  }
  75% {
    transform: rotate(-60deg);
  }
  100% {
    transform: rotate(0);
  }
`;

const StyledTrashIcon = styled(FaRegTrashAlt)`
  cursor: pointer;
  &:hover {
    rotate: 20deg;
    animation: ${rotate} 2s linear infinite;
  }
`;

function CartItem({ item }) {
  const { productId, image, name, quantity, size, totalPrice } = item;
  const dispatch = useDispatch();
  return (
    <StyledCartItem>
      <div>
        <img src={image} alt="product-image" />
      </div>
      <div>{name}</div>
      <div>{quantity}</div>
      <div>{size ? size : <BsDashLg />}</div>
      <div>{formatCurrency(totalPrice)}</div>
      <div>
        <StyledTrashIcon onClick={() => dispatch(deleteItem(productId))} />
      </div>
    </StyledCartItem>
  );
}

export default CartItem;
