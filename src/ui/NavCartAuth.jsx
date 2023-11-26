import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  getTotalCartPrice,
  getTotalQuantityInCart,
} from "../features/cart/cartSlice";
import { getUser } from "../features/auth/authUserSlice";

const StyledNavCartAuth = styled.div`
  display: flex;
  align-items: center;

  .login-cart-count {
    width: 2.3rem;
    height: 2.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -5rem;
    margin-left: -5.1rem;
    font-size: 1.6rem;
    border-radius: 1000px;
    background: red;
    color: white;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  &:link,
  &:visited {
    color: var(--grey-500);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--main-color);
  }

  & svg {
    width: 4rem;
    height: 4rem;
    color: var(--grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--main-color);
  }
  button {
    text-transform: uppercase;
    width: 8rem;
    height: 3.2rem;
    outline: none;
    border: 1px solid #7a7a7a;
    border-radius: 1000px;
    color: #515151;
    font-size: 1.6rem;
    font-weight: 600;
    background: white;
    &:hover {
      background: #fbfbfb;
    }
    &:active {
      background: #f1f1f1;
    }
  }
`;

function NavCartAuth() {
  const totalPrice = useSelector(getTotalQuantityInCart);
  const isLoggedIn = useSelector(getUser);

  return (
    <StyledNavCartAuth>
      {!isLoggedIn && (
        <StyledNavLink to="/auth">
          <button>login</button>
        </StyledNavLink>
      )}

      <StyledNavLink to="/cart">
        <span>
          <BsCart2 />
        </span>
      </StyledNavLink>
      <div className="login-cart-count">{totalPrice}</div>
    </StyledNavCartAuth>
  );
}

export default NavCartAuth;
