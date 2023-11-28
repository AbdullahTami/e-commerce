import styled, { css } from "styled-components";
import { FaBasketShopping } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import Modal from "../../ui/Modal";
import Order from "../../ui/Order";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";

const StyledCartBottom = styled.div`
  width: 33rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
  padding: 1.2rem 2rem;
  width: 100%;
  font-size: 1.8rem;
  font-weight: 500;
  background: white;
  outline: none;
  color: var(--grey-500);
  border: 2px solid #eee;
  font-weight: 600;
  &:hover {
    color: var(--grey-600);
    background: whitesmoke;
  }
  &:active {
    outline: 1px solid #f2f2f2;
    outline-offset: -1px;
  }

  ${(props) =>
    props.$disabled &&
    css`
      cursor: not-allowed;
    `}
`;

const CheckoutButton = styled(StyledLink)`
  color: white;
  background: #ff4141;
  &:hover {
    color: white;
    background: #ff2626;
  }
  &:active {
    outline: 2px solid var(--main-color);
    outline-offset: -1px;
  }
  ${(props) =>
    props.$disabled &&
    css`
      cursor: not-allowed;
      background: #ff2626;
    `}
`;

function CartBottom({ grandTotal }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <StyledCartBottom>
      <StyledLink
        onClick={() => scrollTo(0, 0)}
        $disabled={isLoading}
        to="/product"
      >
        Continue shopping
        <span>
          <FaBasketShopping />
        </span>
      </StyledLink>
      <Modal>
        <Modal.Open
          setIsLoading={setIsLoading}
          order={true}
          opens="order-placement"
        >
          <CheckoutButton $disabled={isLoading}>
            {isLoading ? "Placing your order ..." : "Place order"}
            <span>{isLoading ? <Spinner /> : <MdArrowForwardIos />}</span>
          </CheckoutButton>
        </Modal.Open>
        <Modal.Window orderWindow={true} name="order-placement">
          <Order grandTotal={grandTotal} />
        </Modal.Window>
      </Modal>
    </StyledCartBottom>
  );
}

export default CartBottom;
