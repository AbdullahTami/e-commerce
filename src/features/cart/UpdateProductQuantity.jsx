import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  decreaseItemQuantity,
  getProductQuantityById,
  increaseItemQuantity,
} from "./cartSlice";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import Modal from "../../ui/Modal";
import ConfirmDelete from "./ConfirmDelete";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  font-size: 2rem;
  gap: 1rem;

  & svg {
    transition: 0.3s;
    cursor: pointer;
    height: 2.4rem;
    width: 2.4rem;
    color: #8c8c8c;
    &:hover {
      color: black;
    }
  }
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

function UpdateProductQuantity({ productId, leftIcon, rightIcon }) {
  const quantity = useSelector(getProductQuantityById(productId));
  const dispatch = useDispatch();
  function handleDecrease() {
    dispatch(decreaseItemQuantity(productId));
  }

  function handleIncrease() {
    dispatch(increaseItemQuantity(productId));
  }

  return (
    <Wrapper>
      {leftIcon ? (
        <Modal>
          <Modal.Open
            confirm={quantity !== 1}
            outsideFunction={handleDecrease}
            opens={quantity === 1 ? "delete-modal" : ""}
          >
            <FaCaretLeft />
          </Modal.Open>
          <Modal.Window name="delete-modal">
            <ConfirmDelete onClick={handleDecrease} />
          </Modal.Window>
        </Modal>
      ) : (
        <Button onClick={handleDecrease}>-</Button>
      )}
      <span>{quantity}</span>
      {rightIcon ? (
        <FaCaretRight onClick={handleIncrease} />
      ) : (
        <Button onClick={handleIncrease}>+</Button>
      )}
    </Wrapper>
  );
}

export default UpdateProductQuantity;
