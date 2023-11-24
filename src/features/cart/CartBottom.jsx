import styled from "styled-components";
import { FaBasketShopping } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

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
`;

// const CartButton = styled.button`
//   text-transform: capitalize;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   transition: all 0.3s;
//   padding: 1.2rem 2rem;
//   width: 100%;
//   font-size: 1.8rem;
//   font-weight: 500;
//   background: white;
//   outline: none;
//   color: var(--grey-500);
//   border: 2px solid #eee;
//   font-weight: 600;
//   &:hover {
//     color: var(--grey-600);
//     background: whitesmoke;
//   }
//   &:active {
//     outline: 1px solid #f2f2f2;
//     outline-offset: -1px;
//   }
// `;

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
`;

function CartBottom() {
  return (
    <StyledCartBottom>
      <StyledLink to="/product">
        Continue shopping
        <span>
          <FaBasketShopping />
        </span>
      </StyledLink>
      <CheckoutButton>
        Place order
        <span>
          <MdArrowForwardIos />
        </span>
      </CheckoutButton>
    </StyledCartBottom>
  );
}

export default CartBottom;
