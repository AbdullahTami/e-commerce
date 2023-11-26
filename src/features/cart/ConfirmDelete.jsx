import styled, { css } from "styled-components";
import { deleteItem } from "./cartSlice";
import { useDispatch } from "react-redux";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  h1 {
    font-size: 2.4rem;
    font-weight: 500;
  }

  & p {
    color: var(--grey-500);
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Button = styled.button`
  color: #fee2e2;
  background: #b91c1c;
  border: none;
  box-shadow: var(--shadow-sm);
  border-radius: 5px;
  font-size: 1.6rem;
  padding: 0.8rem 1.2rem;
  font-weight: 500;

  &:hover {
    background: #991b1b;
  }
  &:active {
    outline: 2px solid #991b1b;
    outline-offset: -1px;
  }
  ${(props) =>
    props.$cancel &&
    css`
      background: none;
      color: var(--grey-700);
      border: 1px solid var(--grey-200);
      &:hover {
        background-color: var(--grey-200);
      }
      &:active {
        outline: 2px solid var(--grey-200);
        outline-offset: -1px;
      }
    `}
`;

function ConfirmDelete({ onCloseModal, onClick }) {
  return (
    <StyledConfirmDelete>
      <h1>Remove Product</h1>
      <p>Are you sure you want to remove this product from your cart?</p>
      <div>
        <Button $cancel={true} onClick={onCloseModal}>
          Cancel
        </Button>
        <Button onClick={onClick}>Remove</Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
