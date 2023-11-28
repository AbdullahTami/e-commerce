import styled from "styled-components";
import CartMessage from "./CartMessage";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import emptyCart from "../../assets/empty-cart.png";

const StyledCartHeader = styled.div`
  /* display: flex;
  justify-content: center; */
  padding: 6.4rem 6.4rem;
`;

const StyledLink = styled(Link)`
  color: #3b82fb;
  font-size: 1.8rem;
  display: inline-block;
  margin-bottom: 8rem;
  display: flex;
  align-self: center;
  gap: 0.5rem;
  transition: all 0.3s;
  &:hover {
    color: #055ef6;
  }
`;

const ImageContainer = styled.div`
  margin-top: 9rem;
  display: flex;
  justify-content: center;
`;

function CartHeader({ message, cart }) {
  if (!cart.length)
    return (
      <StyledCartHeader>
        <StyledLink to="/product">
          <FaLongArrowAltLeft /> Start adding items
        </StyledLink>
        <CartMessage>{message}</CartMessage>
        <ImageContainer>
          <img src={emptyCart} alt="" />
        </ImageContainer>
      </StyledCartHeader>
    );
  return (
    <StyledCartHeader>
      <CartMessage>{message}</CartMessage>
    </StyledCartHeader>
  );
}

export default CartHeader;
